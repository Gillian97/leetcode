/*
 * @lc app=leetcode id=852 lang=javascript
 *
 * [852] Peak Index in a Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// 顺序遍历
var peakIndexInMountainArray1 = function (arr) {
  // 已经确定是山脉了 找到最大值的下标即可
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }
};

// 二分查找 根据mid与左右值相比较 判断山坡是否递增->峰值在哪边
// 山峰数组中没有重复值
var peakIndexInMountainArray = function (arr) {
  let len = arr.length;
  let left = 0, right = len - 1, mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] < arr[mid + 1]) { // 右边递增
      left = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) { // 左边递增
      right = mid - 1;
    }
  }
  return left;
}
// @lc code=end

