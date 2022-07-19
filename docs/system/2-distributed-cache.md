# Distributed Cache

The content is mainly based on [System Design Interview - Distributed Cache](https://youtu.be/iuqZvajTOyA).

## Requirements

### Functional

- put
- get

### Non-functional

- **low latency**
- scalability
- availability
- durability

---

## Cache Policy / Eviction Strategy

### Choices

1. FIFO ( First in, first out )
2. LRU ( Least Recently Used ): Most Popular
3. LFU ( Least Frequently Used )

- cache policy is important because **if the target data always not in the cache, it only increase overhead**.
- most popular cache replacement policies: **Discards the least recently used items first** (i.e. `LRU cache`)

### Algorithm and Implementation

#### Read path : Read a value corresponding to a key. This requires :

1. A read from the HashMap and then,
2. An update in the doubly LinkedList

#### Write path : Insert a new key-value entry to the LRU cache. This requires :

- If the cache is full, then
  1. Figure out the least recently used item from the linkedList
  2. Remove it from the hashMap
  3. Remove the entry from the linkedList.

4. Insert the new item in the hashMap
5. Insert the new item in the linkedList.

### How to handle concurrency ?

- If implemented with golang, we can use [sync.RWMutex](https://pkg.go.dev/sync#RWMutex).
- it allows goroutines to acquire multiple `Rlock` and only single `Lock`
- for **read-only** op (`Contains()`, `Peek()`), we can use `Rlock` to improve performance.
- for **write** op (`Add()`, `Remove()`, `Get()`), we should use `Lock`

### Reference

- [Leetcode 146. LRU Cache](https://leetcode.com/problems/lru-cache/)
- [golang-lru](https://github.com/hhow09/golang-lru)

---

## Distributed Cache Implementation

### Sharding

- The performance we want to achieve cannot be done in single machine we need to sharding.
- shard: cache host only store chunk of data, i.e.
- [cache client](#cache-client) library inside each service should know about all shards.

### How to Design Service Host?

#### Dedicated cache cluster

- cache host is **isolated** from service host.

- Pros: cache host can be used by multiple services.
- Pros: flexibility in choosing hardware.

#### co-located cache

- we run cache as a **separate process on a host**.

- Pros: no extra hardware or operational cost
- Pros: scale together with service.

### Hash

> How do cache client decide which cache shard to call?

#### MOD hashing

```
HashHostIdx = HashFunction(key) % NumberOfCacheHosts
```

- usually not feasible for production.
- Cons: When cache host `add` or `deleted`, high probability of cache misses because **all nodes are affected**.

#### consistent Hashing

![](/img/system/2-distributed-cache/consistent-hash.png)

- Hash function to locate the host on the ring (1-2^23) based on the host identifier. A host should owns the traffic between **its own hash value** to **its nearest clockwise neighbor**.
- Pros: When cache host `add` or `deleted`, only small subset (neighbors) of nodes are affected.

##### Domino Effect

- when one node dies the load may transferred to another node
- then cause another dies as well, causing chain reaction.

##### Uneven Distribution

- can solve with `Virtual Nodes`, `Jump Hash`, `Proportional Hashing`

###### Virtual Nodes

instead of positioning a single spot per node on ring, we can position **more than one spot per node**.

---

## Cache Client

- is: a `library`
- knows: list of cache hosts in sorted order.
- responsible for: cache host selection (can use **binary search**) and forward request to a particular shard with `TCP` / `UDP`.

### Service Discovery

> How do we maintain the list of cache client ?

![](/img/system/2-distributed-cache/cache-client-list-maintain.png)

### Static server list

- store as a file
- Cons: `not flexible`, need to re-deploy when hosts change manually.

### Dynamic server list

- use configuration service (e.g. [ZooKeeper](https://zookeeper.apache.org/), [Redis Sentinel](https://redis.io/topics/sentinel))
- cache host sends heartbeat to the config service periodically.
- Pros: fully automate list maintenance

## Data replication

> How to achieve high availability in high QPS (hot shard)? Data replication

- we discuss `async` `leader-follower` data replication here.
- structure and implementation are based on [DDIA CH5: Replication - Leaders and Followers](https://github.com/hhow09/ddia-notes/tree/master/Ch5-Replication#leaders-and-followers)
- Put: only through leader
- Get: can through leader and follower
- Failover: can be implemented by `Cache Client`

## What Else Important

### Potential Inconsistency

- when partition appears, may get stale result from follower.
- when some cache nodes are down, some cache shards are not available.
- Discussion: tradeoff between sync and async replication.

### data expiration

1. `passively` expire cache on get request
2. maintenance thread runs regularly

### local cache

- can implemented local cache as well
- e.g. [Guava Cache](https://www.baeldung.com/guava-cache)

### security

- ensure only the approved client can access the cache
- may encrypt and decrypt cache when put and get cache.

### monitoring and logging

- number of faults while calling the cache
- latency
- number of hits and misses
- CPU and memory utilization on cache hosts
- network I/O

## Summary

![](/img/system/2-distributed-cache/distributed-cache-structure.png)

## Reference

- [interviewbit - design-cache](https://www.interviewbit.com/problems/design-cache/)
- [System Design Interview - Distributed Cache](https://youtu.be/iuqZvajTOyA)
- [consistent hashing in Python](https://gist.github.com/reorx/8470123)
- [Consistent Hashing Algorithm: 應用情境、原理與實作範例](https://medium.com/@chyeh/consistent-hashing-algorithm-%E6%87%89%E7%94%A8%E6%83%85%E5%A2%83-%E5%8E%9F%E7%90%86%E8%88%87%E5%AF%A6%E4%BD%9C%E7%AF%84%E4%BE%8B-41fd16ad334a)
- [NoSQL Essentials: Cassandra](https://www.slideshare.net/frodriguezolivera/nosql-essentials-cassandra-15625311)
