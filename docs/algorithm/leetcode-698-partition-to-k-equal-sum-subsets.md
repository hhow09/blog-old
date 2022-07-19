# 698. Partition to K Equal Sum Subsets

-   https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
-   Difficulty: `Medium`
-   Related Topics: `Array`, `Dynamic Programming`, `Backtracking`, `Bit Manipulation`, `Memoization`, `Bitmask`
-   Similar Questions: [416. Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

## Problem

Given an integer array `nums` and an integer `k`, return `true` if it is possible to divide this array into `k` non-empty subsets whose sums are all equal.

**Example 1:**

```
Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
```

**Example 2:**

```
Input: nums = [1,2,3,4], k = 3
Output: false
```

## Solution 1 - Backtracking

```python
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        allSum = sum(nums)
        if len(nums)<k or allSum %k !=0: return False
        nums.sort(reverse=True) # reverse for speed up
        parts = [allSum/k]*k

        def backtrack(parts, idx):
            if idx == len(nums):
                return sum(parts) == 0
            for i in range(len(parts)):
                if parts[i]>= nums[idx]:
                    parts[i] -= nums[idx]
                    if backtrack(parts,idx+1): return True
                    parts[i] += nums[idx]

        return backtrack(parts, 0)
```

## Solution 2 - Bit Mask

```python
class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        if len(nums) < k or int(sum(nums)/k) != sum(nums)/k: return False
        N = len(nums)
        nums.sort(reverse=True) #[2]Sort the array in descending order, to improve run time.
        # print("nums", nums)
        def dp(mask, cur, memo): # Top-down DP with memoization
            # print("cur", cur)
            # print("mask in binary:", format(mask, '0'+str(len(nums))+'b'))
            if mask == 0: return cur == 0 #[3] If mask == 0, all the elements have been used, and we need to see whether cur is equal to 0.
            elif cur == 0: return dp(mask, sum(nums)/k, memo) #[4] found an equal subset, but not some numbers haven't used. keep finding

            if (mask, cur) not in memo:
                res = False
                for bit in range(N):
                    # 1 << bit: left shift, add bit num of 0 to the right of 1
                    # 1 << bit == pow(2, bit)
                    if mask & (1 << bit): #[6] Check whether the number is unused. A set bit (1) means unused, 0 means used.
                        if nums[bit] > cur: continue
                        if dp(mask ^ (1 << bit), cur-nums[bit], memo): #[7] Use XOR to mark set bit as used (change from 1 to 0)
                            res = True
                            break
                memo[(mask, cur)] = res
            return memo[(mask, cur)]

        return dp(pow(2,N)-1, sum(nums)/k, dict()) #[8]  Initialize mask as 11111...., N set bits.
```

### Explanation

-   for sorted nums `[1, 3 ,7, 10]`,

    -   bitmask `0000` means subset `[]`
    -   bitmask `0110` means subset `[3,7]`
    -   bitmask `1111` means subset `[1,3,7,10]`

-   start with mask `1111`, means all unused
-   `1 << bit` == `pow(2,bit)`
-   use **AND gate** (`&`) of mask and (1 << bit) to check if specific `nums[bit]` is unused.
-   use **XOR gate** (`^`) of mask and (1 << bit) to mark `nums[bit]` as used.

## Reference

-   https://leetcode.com/problems/partition-to-k-equal-sum-subsets/discuss/867956/Python3-Two-solutions-DP-with-Bit-mask(48ms)-DFS%2Bbacktracking-with-detailed-explanations
