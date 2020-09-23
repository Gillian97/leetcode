/*
 * @lc app=leetcode id=59 lang=javascript
 *
 * [59] Spiral Matrix II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let top = 0, bottom = n - 1;
  let left = 0, right = n - 1;
  // 注意不要使用 let arr = new Array(n).fill(new Array(n))
  // 这样fill填充的是同一个数组的引用, 不是多个,(坑)
  // 建议使用for循环初始化结果数组
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n);
  }
  let val = 0;
  // 按照顺时针的方向逐行逐列填充递增值
  // 填充完外圈再填充内圈
  while (top <= bottom && left <= right) {
    // n为奇数 最后 top==bottom left==right
    // 只会走下面这一个for循环 其余for循环均不满足条件
    // n 为偶数 最后 top+1==bottom left+1==right
    // 最后一个for循环不满足条件
    for (let i = left; i <= right; i++) {
      arr[top][i] = ++val;
    }
    for (let i = top + 1; i <= bottom; i++) {
      arr[i][right] = ++val;
    }
    for (let i = right - 1; i >= left; i--) {
      arr[bottom][i] = ++val;
    }
    for (let i = bottom - 1; i >= top + 1; i--) {
      arr[i][left] = ++val;
    }
    top++; bottom--; left++; right--;
  }
  return arr;
};
// @lc code=end

