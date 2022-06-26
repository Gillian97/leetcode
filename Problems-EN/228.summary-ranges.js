/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let n = nums.length;
  if (n == 0) return nums;
  let start = 0;
  let res = [];
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[start] == i - start) continue;
    res.push(i - 1 == start ? `${nums[start]}` : `${nums[start]}->${nums[i - 1]}`);
    start = i;
  }
  res.push(n - 1 == start ? `${nums[start]}` : `${nums[start]}->${nums[n - 1]}`);
  return res;
};
// @lc code=end

