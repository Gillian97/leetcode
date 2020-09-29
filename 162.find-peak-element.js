/*
 * @lc app=leetcode id=162 lang=javascript
 *
 * [162] Find Peak Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 题目时间复杂度要求在 logN 之内 使用二分查找
// 数组肯定包含山顶元素 不会出现找不到的情况
var findPeakElement = function (nums) {
  // 先写基本的二分查找
  // 然后在此基础上进行改进
  let len = nums.length;
  if (len == 1) return 0; // 处理只有一个元素的情况
  let left = 0, right = len - 1, mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    // 处理峰顶元素在数组两端的情况
    if (left == right && mid == len - 1 || mid == 0 && nums[mid] > nums[mid + 1]) return mid;
    // 给定的数组没有两个相邻元素是相等的
    // 只有大小的区别
    if (nums[mid] < nums[mid + 1]) { // 中间元素右边升序 右边可以找到峰顶元素
      left = mid + 1;
    } else if (nums[mid] < nums[mid - 1]) { // 中间元素左边升序 左边可以找到峰顶元素
      right = mid - 1;
    } else if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
      return mid;
    }
  }
};

// let test = [3, 2];
// findPeakElement(test);
// @lc code=end

