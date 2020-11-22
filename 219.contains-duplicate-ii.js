/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// solution 1: 暴力解法
var containsNearbyDuplicate = function (nums, k) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j <= i + k; j++) {
      if (j >= n) break;
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};
// @lc code=end

