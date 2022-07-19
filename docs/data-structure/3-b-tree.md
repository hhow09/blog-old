# B-Tree

## Intro

- B-tree is a self-balancing tree data structure
- B-tree maintains sorted data and allows `searches`, `sequential access`, `insertions`, and `deletions` in `O(log(n))`.
- B-tree is well suited for storage systems that read and write relatively large blocks of data, such as **disks** (slower & larger capacity).
  - The need for B-tree arose with the rise in the need for **lesser time in accessing the physical storage media like a hard disk**.
  - Comparing with other `binary search tree`, `avl tree`, `red-black tree`, B-tree **can store many keys in a single node** and **can have multiple child nodes** which **decreases the height significantly** then allowing faster disk accesses.
  - It is commonly used in **databases** and **file systems**.

## Definition

a B-tree of order `m` is a tree which satisfies the following properties:

### A B-tree of order m=5

![](/img/data-structure/3-b-tree/b-tree.gif)

- order `m` (also known as `branching factor`): each `nonleaf node` contains
  - minimum number (ceiling) `[m-1]/2` of keys
  - mximum number `m-1` of keys
  - `number_of_keys + 1` of child nodes
- All leaves are at the same level.
- root may contain minimum `1` key.
- Number of children of a node is equal to the `number_of_keys + 1`.
- All keys of a node are sorted in **increasing order**.
- The child between two keys `k1` and `k2` contains all keys in the range from `k1` to `k2`.
- B-Tree grows and shrinks from the root which is unlike `Binary Search Tree`. `Binary Search Trees` grow downward and also shrink from downward.
- Like other balanced `Binary Search Trees`, time complexity to search, insert and delete is O(log n).

## B-tree Insertion

- Insertion of a node in B-Tree happens **only at Leaf Node**.

### Steps

1. Find a leaf node for a new item.
   - Start from the root.
   - If the root is an internal node, look at each element from the beginning and stop when an `element > X` is found.
   - Eventually traversing pointers will come to a leaf node.
2. At the leaf node

   - If there is room in the leaf

     ![](/img/data-structure/3-b-tree/b-tree-ins1.gif)

   - If leaf is full, split it into 2 leaves, and copy and insert the middle element into the (internal) parent node

     ![](/img/data-structure/3-b-tree/b-tree-ins2.gif)

   - If leaf's parent is full, split the parent into 2 internal nodes, and copy and insert the middle element into its parent node.

     ![](/img/data-structure/3-b-tree/b-tree-ins3.gif)

## B-Tree Deletion

### Case 1 : Delete a leaf node

#### Case 1-1: if sufficient child node

- Implementation: Directly Delete

![](/img/data-structure/3-b-tree/b-tree-delete-leaf-1.png)

#### Case 1-2: insufficient child node

- Violation of: `nonleaf node` should contains `number_of_keys + 1` of child nodes
- Implementation: borrow a key from its immediate neighboring sibling node in the order of left to right.

![](/img/data-structure/3-b-tree/b-tree-delete-leaf-2.png)

#### Case 1-3: insufficient child node & all sibling has minimum child node

- Implementation: merge the node with either the left sibling node or the right sibling node.

![](/img/data-structure/3-b-tree/b-tree-delete-leaf-3.png)

### Case 2 : Delete a nonleaf node

#### Case 2-1: if left child or right child has more than minimum keys

- Implementation: The deleted node is replaced by an **inorder predecessor** if the left or child child **has more than the minimum number of keys**.

![](/img/data-structure/3-b-tree/b-tree-delete-internal-1.png)

#### Case 2-2: if left child and right child has only minimum keys

- Implementation: merge the left and the right children if **left child and right child has only minimum keys**.

![](/img/data-structure/3-b-tree/b-tree-delete-internal-2.png)

#### Case 2-3: deletion of the key leads to a fewer number of keys in the node

- Implementation: height of the tree shrinks, merging the children.

![](/img/data-structure/3-b-tree/b-tree-delete-internal-3.png)

## Optimization of B-tree

- size saving: we don't have to store all the key.
- Range query: store in to near segments helps range query.

## B-Tree v.s. LSM-Trees

//TODO

## Reference

- [417 lecture note #3 B-Tree](https://condor.depaul.edu/ntomuro/courses/417/notes/lecture3.html)
- [programiz: Deletion from a B-tree](https://www.programiz.com/dsa/deletion-from-a-b-tree)
- [學習手記：2018 清華大學 DB/AI Bootcamp — II — B-Tree Indexing](https://medium.com/hallblazzar-%E9%96%8B%E7%99%BC%E8%80%85%E6%97%A5%E8%AA%8C/%E5%AD%B8%E7%BF%92%E6%89%8B%E8%A8%98-2018%E6%B8%85%E8%8F%AF%E5%A4%A7%E5%AD%B8db-ai-bootcamp-ii-b-tree-indexing-648a096e1598)
- [Designing Data-Intensive Applications: CHAPTER 3 Storage and Retrieval](https://github.com/hhow09/ddia-notes/tree/master/Ch3-Storage-and-Retrieval)
