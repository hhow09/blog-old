# LSM Tree

## Design a simple key value database
### First
- Write: **appending key-value pairs** in a **file as the storage unit**.
	- Complexity: `O(1)`
- Read: with a target key `k`, scan through every k-v pairs. 
	- Complexity: `O(N)` (bad)
```
k1: v1
k2: v2
...
...
...
```
### Optimization
To optimize read performance, we could use a hash map storing the `key-offset` for indexing. Now we have `O(1)` read. The limitation would be **hash map** must totally fit in memroy size.

This is the core idea of [Bitcask](http://highscalability.com/blog/2011/1/10/riaks-bitcask-a-log-structured-hash-table-for-fast-keyvalue.html)

![](/img/data-structure/4-lsm-tree/bitcask-write.jpeg)


## What is LSM Tree

![](/img/data-structure/4-lsm-tree/lsm-tree.png)

1. is a disk friendly data structure.
2. is designed to reduce disk I/O (bottleneck) with **memory-buffered writes**
3. is used when dealing with **write-heavy** workloads.
4. is used by Cassandra / Dynomo DB, HBase, Riak, Lucene, Rocks DB
5. consisted of in-memory part (memtable) + disk part (SSTable)
6. The term **merge** refers to the algorithm with which data is managed in the structure.
7. The term **tree** in its name comes from the fact that data is organized into multiple levels similar to devices in the storage hierarchy in a typical computer where the top level device holds smaller subset of data and is faster to access while the lower levels holds larger segments of data and is slow to access.


## Components
### 1. Memtable (in memory)
- LSMTree starts with an in-memory balanced tree (or hash table).
- What data structure to use for the Memtable typically depends upon the performance requirements but must have a property that it should provide a sorted iteration over its contents. 
- When Memtable grows to a certain threshold, srot and flush into disk as a immutable SSTable
- Memtable keeps the latest data.

### 2. SSTable (in disk)
![](/img/data-structure/4-lsm-tree/sstable.png)

- SSTable is the disk component for LSM-tree.
- SSTable is immutable.
- contains a list of **data blocks** and an **index block**
	- data block stores key-value pairs ordered by keys.
	- index block stores the key ranges of all data blocks.
- when a SSTable is read, index block will be loaded into memory for binary search.

- index block stores the key ranges of all data blocks.
### 3. WAL (write ahead log)
- for crash recovery
- before actually write to memtable, write first to WAL

## Access Pattern
### Read
search memtable first, if not found, search disk segments from latest to oldest

### Write
write data into WAL, then write to Memtable.

### Delete
- add a special **tombstone mark**, means record is delete.
- is also a append operation
- data with **tombstone mark** will be discarded during compaction process.
- data with **tombstone mark** will be regarded as `NULL` in read.

## Compaction strategies
- The core algorithm utilized by compaction is the **k-way merge sort** algorithm adapted to SSTables.
- Compaction strategy impacts the read/write performance and the space utilization in the LSM Tree. 

//TODO
https://dev.to/creativcoder/what-is-a-lsm-tree-3d75

## Optimization
### Read Optimization
![](/img/data-structure/4-lsm-tree/read-optimization.png)

#### index
- We can have an in-memory index (a hashmap) which contains a mapping of keys to their byte offset in the file. However it's not practical for it's using too much memory
- What practical implementations do is that they maintain a Sparse Index of each SSTable which contains only the subset of keys in memory and utilize binary search to quickly skip ranges and narrow the search space.
	
#### **Fence pointer**
when read SSTable, use in-memory fence pointer for binary search to reduce disk I/O.

#### Bloom filter
to fast filter unexist key.
#### merge frequency



## Pros
1. fast write since append only

## Cons
1. Range Query: still need to look up one by one.
2. compaction process affects read and write performance
3. extra space required to perform compaction

## Reference 
- [簡述LSM-Tree](https://codingnote.cc/zh-tw/p/566494/)
- [What is a LSM Tree?](https://dev.to/creativcoder/what-is-a-lsm-tree-3d75)
- [Designing Data-Intensive Applications Ch3](https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/)
- [Scaling Write-Intensive Key-Value Stores](https://youtu.be/b6SI8VbcT4w)
- [Riak's Bitcask - A Log-Structured Hash Table For Fast Key/Value Data](http://highscalability.com/blog/2011/1/10/riaks-bitcask-a-log-structured-hash-table-for-fast-keyvalue.html)