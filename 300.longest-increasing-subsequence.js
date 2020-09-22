/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// solution 1: 使用动态规划
// 后一个元素的递增子串长度最大值依赖于前面每个元素的递增子串长度最大值
var lengthOfLIS = function (nums) {
  let len = nums.length;
  // 不存在递增的子串
  if (len == 0) return [];
  // 初始化数组 保存到达每个位置的所有递增子串长度的最大值(以每个位置为终点)
  let dp = new Array(len);
  dp.fill(1);
  let maxLen = 1, val = 0;
  // 计算每一个位置的最长子串长度
  for (let i = 1; i < len; i++) {
    // 计算过程中, 每次查找i之前的元素, 看有无比nums[i]还小的
    // 小的话就是dp[j]+1
    // 但是还要将 dp[i] 与 dp[j]+1 进行比较, 保留较大值
    // 则最后dp[i]是所有递增子串中最长子串的长度
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        val = dp[j] + 1;
        dp[i] = val > dp[i] ? val : dp[i];
      }
    }
    // 保留dp[i]中的最大值
    maxLen = maxLen > dp[i] ? maxLen : dp[i];
  }
  // 返回的是 最长的递增子串的长度
  return maxLen;
};

let test = [1, 3, 6, 7, 9, 4, 10, 5, 6];
lengthOfLIS(test);

// @lc code=end

