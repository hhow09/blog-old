# Interview Questions

## 1. How to prevent double payment?
### Ref
- [Avoiding Double Payments in a Distributed Payments System](https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb)
- [Lock an Order to Prevent Duplicate Payments using RDBMS](http://www.zhuwu.me/blog/posts/lock-an-order-to-prevent-duplicate-payments-using-rdbms)

### Solution 1: Database Level Lock

```sql
BEGIN;
SELECT * FROM order WHERE id = <order_id>  FOR UPDATE;
# Check the order `paid` status:
# If `paid` is equals to false, 
# process the payment, 
# and update `paid` to true upon successful payment
  COMMIT;
# Otherwise, a payment has been made, 
# so no further action is required.
  ROLLBACK;
```

This method solves the duplicate payments problem. However, since the requests blocked by the database lock occupy server resources forever until they successfully obtained the lock, it might become a performance bottleneck. The user also needs to wait for a long time if his/her payment request is contended for the lock, which results in a bad user experience.


Therefore, the following method aims to return earlier when payment contention is detected. Another table, order_mutex, is required:

```sql
BEGIN;
# try
  INSERT INTO order_mutex VALUES (<order_id>);
# Catch duplicate key error
  ROLLBACK;
# Otherwise, continue
  COMMIT;

# If order_mutex is inserted successfully
  BEGIN;
  # If `paid` is equals to false, 
  # process the payment, 
  # and update `paid` to true upon successful payment
    COMMIT;
  # Otherwise, a payment has been made, 
  # so no further action is required.
    ROLLBACK;

  BEGIN;
  DELETE order_mutex WHERE order_id = <order_id>;
  COMMIT;
# Otherwise, return an error response to notify user 
# that another payment request is being processed.
```


### Solution 2: idempotency keys (w/o locking)
[Stripe: Idempotent Requests](https://stripe.com/docs/api/idempotent_requests)

## 2. What is the pros and cons of having Database index ? 

### Pros
- If you don’t create an index, the database scans all the rows, filters out the matching rows & returns the result.
- Index is used to quicken the search by reducing the number of records to search for.

### Cons
- degrade write performance
- if using index on a [high-cardinality column](https://dba.stackexchange.com/a/136676), the rate of change  from that column can be quite high. If that rate of change is faster than the updating of the index via the background process, then using an index is "inefficient".

## 3. Pros and cons of denormalization

## 4. 2 concurrent Read-then-update operation. How to prevent lost update ?

## 5. One to Many schema design
E.g. group chat user table, user follower table
