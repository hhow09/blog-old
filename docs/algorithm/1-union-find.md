# Union Find

## Intro

-   A `disjoint-set` is a data structure that keeps track of a set of elements partitioned into a number of disjoint (non-overlapping) `subsets`.
-   A `union-find` algorithm is an algorithm that performs two useful operations on such a data structure.
-   `Union`: Join two subsets into a single subset.
-   `Find`: Determine if two elements are in the same subset.

## Find(x)

-   Purpose: return the root of **the set that x is in** also do `path compression`
-   path compression: start from x, find node's parent recursively until the root of the subset, the encountered nodes' parents will become root of the subset root.
-   find(A) == find(B) can check **if vertex A and vertex B are under the same root or not**.

![](/img/algorithm/1-union-find/union-find-find.gif)

## Union(A,B)

-   Purpose: set A and B to **the root of A** or **root of B**
    -   can use `rank` to determine
-   Steps
    -   find(A) and Find B
-   return `False` if **already has same parent**, no join needed
-   return `True` if join performed.

![](/img/algorithm/1-union-find/union-find-union.gif)

### Union with rank

-   Purpose: optimize the tree height
-   set the vertex of larger rank as the parent of another one.

#### #2 is better than #1 for smaller tree height

![](/img/algorithm/1-union-find/union-find-union-rank.gif)

```python
class UF:
    def __init__(self, n):
        self.parents = list(range(n))
        self.ranks = [1] * n

    def find(self, x):
        if self.parents[x] != x:
            self.parents[x] = self.find(self.parents[x])
            # path compression
        return self.parents[x]

    def union(self, pos1, pos2):
        parent1, parent2 = self.find(pos1), self.find(pos2)
        if parent1 == parent2:
            return False
            # already has same parent, no join operation
        if self.ranks[parent2] > self.ranks[parent1]:
            self.parents[parent1] = parent2
        elif self.ranks[parent1] > self.ranks[parent2]:
            self.parents[parent2] = parent1
        else:
            self.parents[parent2] = parent1
            self.ranks[parent1] += 1
            #ranks of p1 plus for p2 joined p1
        return True
```

## Use Case

### find groups
- [547. Number of Provinces](https://leetcode.com/problems/number-of-provinces/)
- [128. Longest Consecutive Sequence](https://leetcode.com/problems/longest-consecutive-sequence/)
- [695. Max Area of Island](https://leetcode.com/problems/max-area-of-island/)

### Detect cycle in undirected graph

-   [1559. Detect Cycles in 2D Grid](https://leetcode.com/problems/detect-cycles-in-2d-grid/)
-   [684. Redundant Connection](https://leetcode.com/problems/redundant-connection/)
-   p.s. noted that for `directed graph` which is not `disjoint-set` so union-find is not feasible

### Path Compression

-   [399. Evaluate Division](https://leetcode.com/problems/evaluate-division/)
    -   `Union-Find` + `Union by rank` + `Path compression`

## Performance

-   `find`: worst case `O (n)` if you need to traverse entire tree
-   `union`: worst case: `O (n)` because it depends on `find()`

## DFS v.s. Union-Find

-   The union-find algorithm is best suited for situations where the `equivalence relationship is changing`. i.e. if you have a graph with new edges being added, use `union-find`.
-   Given a fixed `undirected graph`, you don't have the equivalence relationships changing at all i.e. the edges are all fixed. You can use both. However DFS is preferred in this situation for simpler and faster (`O(n)` versus `O(n alpha(n)`),

## Reference

-   [Union-Find – 陪你刷題](https://haogroot.com/2021/01/29/union_find-leetcode/?fbclid=IwAR218A84pYyJWxXOXyriq9ULjw8w2PvhQyjXYioKDJJkwvYVU9wIeSDzWeE)
-   [Graph: Intro(簡介)](http://alrightchiu.github.io/SecondRound/graph-introjian-jie.html)
-   [Disjoint Set Union (Union Find)](https://www.hackerearth.com/practice/notes/disjoint-set-union-union-find/)
-   [Graph: 利用 DFS 和 BFS 尋找 Connected Component](http://alrightchiu.github.io/SecondRound/graph-li-yong-dfshe-bfsxun-zhao-connected-component.html)
-   [Disjoint Set (Or Union-Find) | Set 1 (Detect Cycle in an Undirected Graph)](https://www.geeksforgeeks.org/union-find/)
