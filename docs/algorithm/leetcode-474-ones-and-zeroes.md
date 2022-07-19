# 474. Ones and Zeroes

- https://leetcode.com/problems/ones-and-zeroes/
- Difficulty: `Medium`
- Related Topics: `Array`, `String`, `Dynamic Programming`
- Similar Questions: `Count Subarrays With More Ones Than Zeros`, `Non-negative Integers without Consecutive Ones`, `All Divisions With the Highest Score of a Binary Array`

## Problem
You are given an array of binary strings `strs` and two integers `m` and `n`.

Return *the size of the largest subset of `strs` such that there are **at most** `m` `0`*'s and* `n` `1` 's in the subset.


A set `x` is a **subset** of a set `y` if all elements of `x` are also elements of `y`.


 


**Example 1:**



```

Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.

```

**Example 2:**



```

Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.

```

 


**Constraints:**


* `1 <= strs.length <= 600`
* `1 <= strs[i].length <= 100`
* `strs[i]` consists only of digits `'0'` and `'1'`.
* `1 <= m, n <= 100`



## Explanation
### Identify Problem
This is a **0/1 knapsack** problem with 2 constraints.
The value of items ( total count ) are equal.

### DP matrix:
we have `dp[i][j][k]`: the max number of strings that can be formed with `i` `0`'s and `j` `1`  's
- `i` is count of zero
- `j` is count of one
- `k` is the index of element

Since we need maximum so the `k`-axis can be flattened.

Then we have `dp[i][j]`
        

### Transition Function

```
dp[i][j] = max( dp[i][j] , dp[i-c0][j-c1]+1 )
```

- `c0`: the `0-count` of current string
- `c1`: the `1-count` of current string


### Iteration Direction
For each string (Loop 1) we are updating 2D dp matrix (Loop 2, Loop 3).

For Loop2 and Loop3, We need to iteration from **bottom-right** to **left-top** because it should NOT re-use the result from current iteration. it will cause overcounting.

## Solution

```python
class Solution:
    def findMaxForm(self, strs: List[str], m: int, n: int) -> int:
        dp = [[0 for _ in range(n+1)] for _ in range(m+1)]
        counts = [collections.Counter(s) for s in strs]
        counts = [(c['0'], c['1']) for c in counts]
        
        for c0,c1 in counts: # Loop 1
            for i in range(m, c0-1, -1): # Loop 2
                for j in range(n, c1-1, -1): # Loop 3
                    dp[i][j] = max(dp[i][j], dp[i-c0][j-c1]+1)
        return dp[m][n]
```


### Complexity

- Time complexity : `O(N*m*n)`
- Space complexity : `O(m*n)`
