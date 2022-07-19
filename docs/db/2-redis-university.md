# Redis University Notes

## Learning Resource
1. [Redis University RU101: Introduction to Redis Data Structures](https://university.redis.com/courses/ru101/)
2. [Redis University RU102PY: Redis for Python Developers](https://university.redis.com/courses/ru102py/)

## Strings
### Encoding
Strings data type can be encoded as `raw`, `int` or `embstr` (short string)
1. `raw`: 
    - Raw is `redisObject` + `sds`. That is to say `redisObject` Of `ptr` Pointer to a `sdshdr` Object.
    - Raw will call the memory allocation function **twice** to create the `redisobject` structure and `sdshdr` structure.
	- once encoded as `raw` it will not return to `embstr`

2. `embstr`
    - which is a special encoding method for saving short strings.
    - If the string object holds a string value, and the length of the character’s coarse value is less than or equal to `44` Byte.
    - embedded string, which embeds the `sdshdr` structure into the `redisobject`.
    - embstr code will call the memory allocation function **once** to allocate a piece of **continuous space**, which includes two structures: `redisObject` and `sdshdr`
    
3. `int`
	- If a string object holds an integer, and the integer value can be identified by long type
	- the pointer of the string object `redisObject` will directly save the long value

### Reference
- [Redis data structure (2) – string](https://developpaper.com/redis-data-structure-2-string/)


## Use Case: Faceted Search
- We have a collection of json items reside under different `KEY`s.
- We want to search by `item_key=value1` among multiple items.
- Normally in database we have **secondary index**, however **there is no index in Redis**. 

### 1. Object Inspections 

naive solution, no index, find one by one then filter.

Time complexity: `O(N)`

### 2. Set Intersection

Maintain `set` as index for each search condition. e.g. `a="Foo"`, `b=true`

When searching for `a="Foo" && b=true`, intersection (`SINT`) to sets.

Time complexity: `O(M*N)`, `M` is the count of minimum set member and `N` is the set count.

Tips: When doing intersection, start with the set with lowest cardinality.


### 3. Hashed Keys

Similar to [SQL Composite index](https://www.postgresql.org/docs/current/indexes-multicolumn.html)

Maintain `set` for all search combination. e.g. `a="Foo" && b=true`, `a="Foo" && b=false`

We will get better read performance because there is no **Set Intersection** needed when reading.

Time complexity: `O(N)`, `N` is the set count.

good for read-heavy access pattern.


## Use Case: Object Storage with Hashes
Redis Hash cannot have nested hash. How can we save nested object in Redis?

### 1. Serialization
```python
# save
r = redis.Redis(host="127.0.0.1", port=6379, db=0, charset="utf-8", decode_responses=True)
student = {
            "id": 1,
            "name": "Alex",
            "surname": "Fox",
            "age": "18",
            "university": "Stanford",
            "grades": {
                "math": 100,
                "physics": 90,
                "informatics": 100
            }
        }
r.set("student", json.dumps(student))

# get 
student_obj_as_bytes = r.get("student")
type(student_obj_as_bytes) # <class 'bytes'>
```

#### Cons
- cnnot index
- need to parse whole json if noly need part of it.

### 2. Flatten 
Flatten with naming convention

### 3. Different Hash
```python
# save
r = redis.Redis(host="127.0.0.1", port=6379, db=0)
student = {
            "id": 1,
            "name": "Alex",
            "surname": "Fox",
            "age": "18",
            "university": "Stanford",
            "grades": 'student:alex:grades'
}

def get_student_key(student):
    return f'student:{student.id}'
def get_student_grade_key(student):
    return f'student:{student.id}:grades'

def save_student(redis, student):
    student_key =get_student_key(student)
    grade_key = get_student_grade_key(student)
    # destructure nested
    grades = student["grades"]
    student["grades"] = grade_key # need to have consistent naming convention
    
    # save in hash
    r.hmset(student_key, student)
    r.hmset(grade_key, grades)

def get_student(redis, id):
    student_key =get_student_key(student)
    grade_key = get_student_grade_key(student)    
    
    # hgetall: Return a Python dict of the hash’s name/value pairs
    student = r.hgetall(grade_key)
    grades = r.hgetall(grade_key)
    student.grade = grade
    return student
```

#### Pros
- each hash has its own expiration.
- can get partial data with `O(1)`

#### Cons
- complexity of maintaining relationship

---

## Transactions
- Redis is single thread, transaction is serialized. 
- command: `MULTI` -> ...`COMMANDS` -> `EXEC`. before `EXEC`, commands are only `QUEUED`
- Redis does not support rollback. If some of the commands fail in the transaction but all other commands which are successful are applied.

### Watch
- `WATCH` some key BEFORE `MULTI` command
- Transaction will fail to execute if watched key changed.


## Lua Scripting
### Why Lua 
- lua script is an **atomic unit of execution**
- it can reduce the round trip between client and redis-server
- script can be save and execute with [EVALSHA](https://redis.io/commands/evalsha/)

### Cons
- Lua will truncate float into integer, if we want to preserver float number, we need to return a string

### Long Run Lua Script
- lua command is **blocking**, however if the execution time exceeds `lua-time-limit` (default `5` s), it will start to accept client command and return `BUSY` error. 


## Pipelining v.s. Transactions v.s. Lua Scripts

[Redis: Pipelining, Transactions and Lua Scripts](https://rafaeleyng.github.io/redis-pipelining-transactions-and-lua-scripts)


// TODO


---

## Use Case: Inventory with Lua
- code in [uc06-inventory-with-lua](https://github.com/redislabs-training/ru101/tree/main/redisu/ru101/uc06-inventory-with-lua)

### Define State 

#### Purchase State
```
 (1)        (2)         (5)(6)(7).     (8)
Start --> Reserved --> Authorize --> Complete
             \               \
              Fail           Fail
               (3)
```

#### Ticket Hold State
```
HELD --> PREPARE --> DELETED
```

### Flow
1. execute lua script [request_ticket_hold_v2_script](https://github.com/redislabs-training/ru101/blob/main/redisu/ru101/uc06-inventory-with-lua/inventory-lua.py#L110) performing:
    1. check if `held ticket count + request ticket count <= event_capacity`
    2. create new ticket hold
2. [create_purchase](https://github.com/redislabs-training/ru101/blob/main/redisu/ru101/uc06-inventory-with-lua/inventory-lua.py#L233) to create an order hash, with state `RESERVE` with an **expiration time** (`hold_timeout`)
3. If ticket is not enough, flow Failed
4. Now server wait the customer to enter payment info
5. After received payment info, execute lua script performing:
    1. check if purchase is timeout, if cannot get `customer_hold_key` means it's timeout.
    2. Set the `customer_hold_key` to `PREPARE` to wait payment check with lua script
6. Set the State to `Authorize`
7. `creditcard_auth`
8. execute lua script [complete_purchase_script](https://github.com/redislabs-training/ru101/blob/main/redisu/ru101/uc06-inventory-with-lua/inventory-lua.py#L168) performing.
    1. reduce the available ticket by the held count.     
    2. remove the `customer_hold_key` 
    3. Set the Purchase state `COMPLETE`
