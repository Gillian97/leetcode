/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i]
// 迭代
var rob1 = function (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  let dp = new Array(n);
  dp.fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

// 递归
var rob = (nums) => {
  let n = nums.length;
  if (n == 0) return 0;
  let note = {};
  var dp = (i) => {
    if (i == 0) return nums[0];
    if (i == 1) return Math.max(nums[0], nums[1]);
    if (note.hasOwnProperty(i)) return note[i];
    note[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
    return note[i];
  }
  return dp(n - 1);
}
// @lc code=end

