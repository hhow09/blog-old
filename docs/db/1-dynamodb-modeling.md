# How to model one-to-many relationships in DynamoDB

## Original Post
[How to model one-to-many relationships in DynamoDB](https://www.alexdebrie.com/posts/dynamodb-one-to-many/)

## Basics of one-to-many relationships
### How do I fetch information about the parent entity when retrieving one or more of the related entities?
#### in RDB
using a foreign key in one table to refer to a record in another table and using a SQL `JOIN` at query time to combine the two tables.
#### in NoSQL
there are multiple ways depending on the **access pattern**.
1. Denormalization by using a complex attribute
2. Denormalization by duplicating data
3. Composite primary key + the Query API action
4. Secondary index + the Query API action
5. Composite sort keys with hierarchical data

## Denormalization by using a complex attribute
The **MANY** entity is an attribute of list type inside **ONE** (parent)

### Example
a customer might have multiple `Address`

#### in SQL
![1-sql](/img/db/1-dynamodb-modeling/1-sql.png)

#### in NoSQL
![1-nosql](/img/db/1-dynamodb-modeling/1-nosql.png)


### When to use
#### 1. Do you have any access patterns based on the values in the complex attribute? 
No, In this example we don't need to **Fetch a Customer by his or her mailing address**. 

#### 2. Is the amount of data in the complex attribute unbounded?
No, In this example the amount of address is limited.

**A single DynamoDB item cannot exceed 400KB of data.**

If it might grows unbounded, we should separate to single table.

## Denormalization by duplicating data
Copy the **ONE** into the attribute of **MANY**

### Example
`Book` Table might have duplicate `Auther` value. 

#### in SQL
by [2nd normal form](https://www.geeksforgeeks.org/second-normal-form-2nf/) we should save `Auther`in a single table and **JOIN** the author data when reading it.
![2-sql](/img/db/1-dynamodb-modeling/2-sql.png)

#### in NoSQL
**If data is immutable**, we should directly save `Auther` in the attribute of `Book` Table.

![2-nosql](/img/db/1-dynamodb-modeling/2-nosql.png)

### When to use
#### 1. Is the duplicated information immutable?

#### 2. If the data does change, how often does it change and how many items include the duplicated information?
It will make **UPDATE** operation complex and inefficient. 

However if it's read heavy, it still worthy.

## Composite primary key + the Query API action
with `Partition Overloading`, save **ONE** and **MANY** in single table without hierarchy.

### Example
- `ORG` and `USER` is one-to-many relationship
- `ORG` as **Partition Key** and overloading multiple entity type in **sort key** such as `METADATA` and `USER`

![3-nosql](/img/db/1-dynamodb-modeling/3-nosql.png)

### It can support
1. Retrieve an Organization.
2. Retrieve an Organization and all Users within the Organization.
3. Retrieve only the Users within an Organization.
4. Retrieve a specific User. ( If you know both the Organization name and the User’s username)

## Secondary index + the Query API action
- Multiple levels of one-many relationship
- When searching at a particular level in the hierarchy, you **DO NOT** want all subitems in that level rather than just the items in that level.

### Example - using Composite primary key + the Query API action
![4-nosql](/img/db/1-dynamodb-modeling/4-nosql.png)
- Multiple levels of **one-many** relationship: E.g. `ORG` -> `USER` -> `Tickets`
- For 1st level, `ORG` -> `USER` we could deal with `Composite primary key + the Query API action`. Then primary key of `User` becomes `ORG#<OrgName>#USER#<UserName>`
- For 2nd level, `USER` -> `Tickets`, If we keep adding the composite primary key, primary key of `Ticket` becomes `ORG#<OrgName>#USER#<UserName>#Ticket#<TicketId>`。
- However in this design, we may also get lots of `Ticket` when querying by `ORG` and `USER`.
 
### Example Secondary index
![4-nosql 2](/img/db/1-dynamodb-modeling/4-nosql2.png)
![4-nosql 3](/img/db/1-dynamodb-modeling/4-nosql3.png)

1. Model **Ticket** items to be in a separate item collection.
2. Create a global secondary index (**GSI**) named `GSI1` whose keys are `GSI1PK` and `GSI1SK`.
3. For both our `Ticket` and `User` items, add values for `GSI1PK` (`ORG#<OrgName>#USER#<UserName>`).

Then we could access `User - Tickets` items with `GSI`.

### When to use
When you don't want to change the original access access pattern: you don't need `Ticket` when querying `User` 和 `Org`, we could use **GSI**.

## Composite sort keys with hierarchical data
- Multiple levels of **one-many** relationship.
- When searching at a particular level in the hierarchy, you want all subitems in that level rather than just the items in that level.

### Example
![5-nosql](/img/db/1-dynamodb-modeling/5-nosql.png)
- Multiple levels of **one-many** relationship: E.g. `Country` -> `State` -> `City` -> `ZIP`


### access pattern
1. Find all locations in a given `country`. Use a Query with a key condition expression of `PK = <Country>`, where Country is the country you want.
2. Find all locations in a given country and state. Use a Query with a condition expression of `PK = <Country> AND begins_with(SK, '<State>#'`.
3. Find all locations in a given country, state, and city. Use a Query with a condition expression of `PK = <Country> AND begins_with(SK, '<State>#<City>'`.
4. Find all locations in a given country, state, city, and zip code. Use a Query with a condition expression of `PK = <Country> AND begins_with(SK, '<State>#<City>#<ZipCode>'`.

### When to use
When searching at a particular level in the hierarchy, you want all subitems in that level rather than just the items in that level.