/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// dp[i] 表示以这个房间结束 积累的最多财富
var rob = function (nums) {
  let n = nums.length;
  if (n == 0) return 0;
  if (n == 1) return nums[0]
  let nums1 = nums.slice(1), nums2 = nums.slice(0, n - 1);
  // console.log(nums1, nums2)
  let note1 = {}, note2 = {};
  return Math.max(dp(n - 2, note1, nums1), dp(n - 2, note2, nums2));
};

var dp = (i, note, nums) => {
  if (i == 0) return nums[0];
  if (i == 1) return Math.max(nums[0], nums[1]);
  if (note.hasOwnProperty(i)) return note[i];
  note[i] = Math.max(dp(i - 2, note, nums) + nums[i], dp(i - 1, note, nums));
  return note[i];
}
// @lc code=end

