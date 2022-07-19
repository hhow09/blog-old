# Prefix Sum

## 清單
- [Leetcode - Prefix Sum](https://leetcode.com/tag/prefix-sum/)
- [Leetcode Training - Prefix Sum](https://haren-lin-1.gitbook.io/leetcode-training/prefix-sum)

## 使用時機
當題目是整數 array 且出現 **subarray sum** 或者 **range sum** ，可以考慮使用prefix sum。

python可搭配 [itertools.accumulate](https://docs.python.org/3/library/itertools.html#itertools.accumulate) 使用

## 1. 單純求指定區間
注意好原array 跟 prefix sum array的index對應即可

[304. Range Sum Query 2D - Immutable](https://leetcode.com/problems/range-sum-query-2d-immutable/)

## 2. 搭配sliding window
通常作為輔助 sliding window 需要會計算區間結果

[1031. Maximum Sum of Two Non-Overlapping Subarrays](https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/)

[1695. Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)

## 3. 求subarray 數量

搭配 hash map / counter 紀錄符合的數量

[560. Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)

```python
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        prefix_sum = list(itertools.accumulate(nums))
        c = collections.Counter([0])
        # counter 初始為 [0] 是要符合 當第一個數即為 k 的條件
        # counter 用來記錄對每個 i, sum(nums[0:i]) (inclusive) 的數量
        ans = 0
        for prefix in prefix_sum:
            ans += c[prefix-k]
            # 若出現 prefix_sum[i] - prefix_sum[j] == k, 意即 subarray nums[i:j] (inclusive) == k
            c[prefix]+=1
        return ans
```

### 同類
- [974. Subarray Sums Divisible by K](https://leetcode.com/problems/subarray-sums-divisible-by-k/)
解法類似 560

- [1590. Make Sum Divisible by P](https://leetcode.com/problems/make-sum-divisible-by-p/)
974的變形，變成找「能把原本餘數 `sum(nums) % p` 去除的」subarray

- [1695. Maximum Erasure Value](https://leetcode.com/problems/maximum-erasure-value/)


## 4. subarray sum 符合條件
條件可能是: 指定subarray長度 / 指定subarray sum 求最短/最長可能長度

利用 hash table 紀錄各 prefix sum 的 index。

[1658. Minimum Operations to Reduce X to Zero](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/)

```python
class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
    	"""
		要把題目的「從兩邊扣掉」x，想成「中間剩下」 total - x
    	"""
        n = len(nums)
        prefix = [0] + list(accumulate(nums))
        d = {c: i for i,c in enumerate(prefix)}
        # nums皆是正數, 所以prefix為嚴格遞增, 不會重複
        
        goal = prefix[-1] - x # 中間剩下的 window 目標
        if goal < 0 :
            return -1
        ans = math.inf
        for num in d:
            if num+goal in d:
                ans = min(ans, n - (d[num+goal]- d[num]))
        return ans if ans< math.inf else -1
```


### 同類
- [523. Continuous Subarray Sum](https://leetcode.com/problems/continuous-subarray-sum/)
- [525. Contiguous Array](https://leetcode.com/problems/contiguous-array/)