/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 二分查找 一定有解
var twoSum = function (numbers, target) {
  let n = numbers.length, index = 0;

  let binarySearch = (start, tar) => {
    let left = start, right = n - 1, mid = 0;
    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (numbers[mid] == tar) return mid;
      if (numbers[mid] < tar) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return -1;
  }

  for (let i = 0; i < n; i++) {
    index = binarySearch(i + 1, target - numbers[i]);
    if (index == -1) continue;
    return [i + 1, index + 1];
  }
};
// @lc code=end

