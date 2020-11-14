/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

const { FORMERR } = require("dns");
const M = require("minimatch");

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i]
// 迭代
var rob1 = function (nums) {
  let n = nums.length;
  let dp = new Array(nums.length);
  dp.fill(0);
  let res = 0;
  for (let i = 0; i < n; i++) {
    let max = 0;
    for (let j = 0; j < i - 1; j++) {
      max = Math.max(dp[j], max);
    }
    dp[i] = max + nums[i];
    res = Math.max(res, dp[i]);
  }
  return res;
};

// 递归
var rob = (nums) => {
  let n = nums.length;
  let note = {};
  let res = 0;
  var dp = (i) => {
    if (i == 0 || i == 1) {
      res = Math.max(res, nums[i]);
      return nums[i];
    }
    if (note.hasOwnProperty(i)) return note[i];
    let max = 0;
    for (let j = 0; j < i - 1; j++) max = Math.max(dp(j), max);
    note[i] = max + nums[i];
    res = Math.max(res, note[i]);
    return note[i];
  }
  for (let i = n - 1; i >= 0; i--) dp(i);
  return res;
}
// @lc code=end

