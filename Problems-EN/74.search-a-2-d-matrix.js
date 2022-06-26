/*
 * @lc app=leetcode id=74 lang=javascript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 将二维数组的每一个元素连起来看 是个有序数组
// 有序数组查找某一个元素 使用二分查找
// 不使用额外的空间 go
var searchMatrix = function (matrix, target) {
  // 特殊情况
  let m = matrix.length;
  if (m == 0) return false;
  let n = matrix[0].length;
  if (n == 0) return false;

  let left = 0, right = m * n - 1, mid = 0;
  let row = 0, col = 0; // 横纵坐标

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    // 将mid转变为对应的横纵坐标
    row = Math.floor(mid / n);
    col = mid % n;
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] < target) {
      left = mid + 1;
    } else if (matrix[row][col] > target) {
      right = mid - 1;
    }
  }
  return false;
};

// let test = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// let res = searchMatrix(test, 3);
// console.log('res:',res);
// @lc code=end

