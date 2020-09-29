/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 暴力解法就是逐行或逐列使用二分查找直至找到目标元素
// 参考答案有一种巧妙的解法
// 可以从右上角元素开始 与target比较
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  if (m == 0) return false;
  let n = matrix[0].length;
  if (n == 0) return false;
  let row = 0, col = n - 1; // 右上角元素的起始坐标
  // 注意row++ col-- 所以退出while循环的条件有所不同
  while (row <= m - 1 && col >= 0) {
    if (matrix[row][col] == target) {
      return true;
    } else if (target < matrix[row][col]) {
      col--;
    } else if (target > matrix[row][col]) {
      row++;
    }
  }
  return false;
};
// @lc code=end

