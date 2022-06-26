/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 按照提示估计是两种解法 一种动态规划 O(N) 一种分治算法 估计更快 涉及线段树

// solution 1: 动态规划
// 根据连续的子串 我首先想到的是 动态规划
var maxSubArray = function (nums) {
  // 使用 dp[i] 保存以nums[i]为终点的连续子串的最大和
  // 需要求出每个位置的dp[i] 然后返回最大的dp[i]即可
  // dp[i] = max(nums[i], dp[i-1]+nums[i])
  // 即: 取连续与不连续的最大值
  let pre = nums[0]; // 一直保留前一个元素的连续子串的最大和
  let maxSum = nums[0]; // 保留截至目前的最大和
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    maxSum = Math.max(maxSum, pre);
  }
  return maxSum;
};

let test =[-2,1,-3,4,-1,2,1,-5,4];
maxSubArray(test);
// @lc code=end

