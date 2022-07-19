# Transaction Phenomenas

## Intro
- transaction refers to RMDBS transaction.

## Isolation Level v.s. Read Phenomena
![](/img/db/4-transaction-phenomena/isolation-level-read-phenomena.png)

## Dirty Read
- 2 concurrent transaction on same object: T1 for update , T2 read.
- T2 could read the uncommited value of T1
- this happens in `READ UNCOMMITTED`

### Example
![](/img/db/4-transaction-phenomena/dirty_read.png)

### Solution
- use **Read Committed** isolation level.


## Dirty Write
- 2 concurrent transaction on same object: T1 update , T2 update.
- before T1 commit, the modification of T1 is overwritten by T2.
- this happens in `READ UNCOMMITTED`
### Example
![](/img/db/4-transaction-phenomena/dirty_write.png)

### Solution
- use **Read Committed** isolation level.

## Nonrepeatable Read

### Example
![](/img/db/4-transaction-phenomena/nonrepeatable_read.png)

### Solution
use **Repetable Read** isolation level: each transaction reads from a consistent snapshot of the database-that is, the transaction sees all the data that was committed in the database at the start of the transaction.

## Lost Update
- 2 concurrent transaction on same object: T1 update , T2 update.
- this happens in `READ COMMITTED`


### Example
![](/img/db/4-transaction-phenomena/lost_update.png)

- Bob's Commit is Lost

### More Examples 
- Incrementing a counter or updating an account balance (requires reading the current value, calculating the new value, and writing back the updated value)
- Making a local change to a complex value, e.g., adding an element to a list within a JSON document (requires parsing the document, making the change, and writ‐ ing back the modified document)
- Two users editing a wiki page at the same time, where each user saves their changes by sending the entire page contents to the server, overwriting whatever is currently in the database

### Solutions
#### 1. Incorrect!!: (change to `REPEATABLE READ` isolation level)
Could still happen.

#### 2. Atomic write operations provided by DB

```sql
UPDATE counters SET value = value + 1 WHERE key = 'foo';
```

-   Atomic operations are usually implemented by taking an exclusive lock on the object when it is read so that no other transaction can read it until the update has been applied.


#### 3. Explicit locking

```sql
BEGIN TRANSACTION;
SELECT * FROM figures
WHERE name = 'robot' AND game_id = 222 FOR UPDATE;
COMMIT;
```

- `FOR UPDATE`  clause indicates that the database should take a lock on all rows returned by this query.
- Check whether move is valid, then update the position of the piece that was returned by the previous SELECT. UPDATE figures `SET position = 'c4' WHERE id = 1234;`

#### 4. Compare-and-set

```sql
 -- This may or may not be safe, depending on the database implementation
UPDATE wiki_pages SET content = 'new content' WHERE id = 1234 AND content = 'old content';
```

-   If the content has changed and no longer matches 'old content', this update will have no effect, so you need to check whether the update took effect and retry if neces‐ sary.


### Lost Update v.s. Dirty Write
- Dirty Write can be prevented in RC level
- Lost Update still happens in RR level

## Write Skew

//TODO

## Phantom

//TODO

## Ref
- [transaction phenomena](https://xianmu.github.io/posts/2019-01-19-transaction-phenomena.html)
- [Lost Update Phenomena](https://www.zghurskyi.com/lost-update/)
- [對於 MySQL Repeatable Read Isolation 常見的三個誤解](https://medium.com/@chester.yw.chu/%E5%B0%8D%E6%96%BC-mysql-repeatable-read-isolation-%E5%B8%B8%E8%A6%8B%E7%9A%84%E4%B8%89%E5%80%8B%E8%AA%A4%E8%A7%A3-7a9afbac65af)