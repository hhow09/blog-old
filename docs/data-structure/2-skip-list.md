# Skip List

## What is Skip List?

- A skip list is a `probabilistic` data structure.
- A skip list takes `O(log(n))` time to `add`, `erase` and `search`, which is not possible in `array` or `linked list`
- A skip list is **indexable** to make **random access** `take O(log n)` time.
- A skip list has the same function and performance comparing with `treap` and `red-black tree`.
- That the skip list can be interpreted as a type of `randomly balanced tree`

## Data Structure

![skip list structure](/img/data-structure/1-skip-list/skiplist.svg)

- a node: contains
  - value `val`
  - height `h`
  - a list of pointers `node[] next` from level 0 to level h.
  - The next[i] representing the pointer of level `i` which points to the next node of same level i.
- listHeight: The height of a skip list is the height of its tallest node.
- MaxHeight: A constant that limit the height of skip list.
- sentinel: the dummy head node of list of every level.
  - usually initialize with value of `Number.MIN_SAFE_INTEGER`, h of `MaxHeight-1`
  - Every search starts from sentinel.
- probability `p`: If a node contains level from 0 to i, **the probability that it has `i+1` level.**

## Search

### The search path for the node containing 4.

![skiplist-searchpath](/img/data-structure/1-skip-list/skiplist-searchpath.svg)

- The higher the level, the sparser the list.
- Search starts from high level to low level.
- Some nodes are skipped during search, resulting in the similarity to `binary search`.

### Search Algorithm

```java
    // find the predecessor
    private Node findPred(int num) {
        Node cur = sentinel;
        for (int r = topLevel; r >= 0; r--) {
            while (cur.next[r] != null && cur.next[r].val < num)  cur = cur.next[r];
            stack[r] = cur;
        }
        return cur;
    }

    public boolean search(int target) {
        Node pred = findPred(target);
        return pred.next[0] != null && pred.next[0].val == target;
    }
```

## Add

### Adding an element to a skip list

![Adding an element to a skip list](/img/data-structure/1-skip-list/skiplist-addix.svg)

```java
    private int pickHeight() {
        return Math.floor(Math.random() * MAX_HEIGHT);
    }
    public void add(int num) {
        Node pred = findPred(num);
        if (pred.next[0] != null && pred.next[0].val == num) {
            pred.next[0].count++;
            return;
        }
        Node newNode = new Node(num, pickHeight());
        while (topLevel < newNode.h) stack[++topLevel] = sentinel;
        for (int i = 0; i <= newNode.h; i++) {
            //connect all prev and next nodes of level 0 - newNode.h
            newNode.next[i] = stack[i].next[i];
            stack[i].next[i] = newNode;
        }
    }
```

## Random Access O(log(n))

```
   1                               10
 o---> o---------------------------------------------------------> o    Top level
   1           3              2                    5
 o---> o---------------> o---------> o---------------------------> o    Level 3
   1        2        1        2              3              2
 o---> o---------> o---> o---------> o---------------> o---------> o    Level 2
   1     1     1     1     1     1     1     1     1     1     1
 o---> o---> o---> o---> o---> o---> o---> o---> o---> o---> o---> o    Bottom level
Head  1st   2nd   3rd   4th   5th   6th   7th   8th   9th   10th  NIL
      Node  Node  Node  Node  Node  Node  Node  Node  Node  Node
```

- we can store the length of list (bottom level)
- For example, to find **5th node**, the path will be.
  - Traverse from top level list, but moving to next node costs 10 more steps, which is too much.
  - Therefore, drop one level to level 3 and move next to 4th node.
  - drop one level to level 2.
  - drop one level to bottom level.
  - move next to 5th node.

## Performance

- A skip list of `n` nodes and probability `p`.
- Node number of level i is `n * p^(i-1)`
  - first level: `n`
  - second level: `n * p`
  - third level: `n * p^2`
- average search length is the order of `log(n)`

## Indexable skiplist

## Balanced Tree v.s. Skip List

- Concurrent programming

  - when the **tree** is modified it often needs to **re-balance**, affecting large portions of the tree. Then it will require a mutex lock on many of the tree nodes.
  - Inserting a node into a skip list is far more localized, **only nodes directly linked to the affected node need to be locked**.

- [Skip List vs. Binary Search Tree](https://stackoverflow.com/a/260277)

## Application

### Skip list in Redis

- [Redis 内部数据结构详解(6)——skiplist](http://zhangtielei.com/posts/blog-redis-skiplist.html)

### Skip list in Lucene

- [How does lucene index documents?](https://stackoverflow.com/a/43203339)
- In a nutshell, Lucene builds an **inverted index** using **Skip-Lists** on disk, and then loads a mapping for the indexed terms into memory using a **Finite State Transducer (FST)**.

## Reference

- [Leetcode 1206. Design Skiplist](https://leetcode.com/problems/design-skiplist/)
- [Open Data Structure 4 Skiplists](https://opendatastructures.org/newhtml/ods/latex/skiplists.html#tex2htm-54)
- [Redis 内部数据结构详解(6)——skiplist](http://zhangtielei.com/posts/blog-redis-skiplist.html)
