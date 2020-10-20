/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 皇后彼此不能相互攻击也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上
var totalNQueens = function (n) {
  // 初始化棋盘
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push('.');
  }
  let path = [], res = []; // 存储皇后的纵坐标
  backtrack(board, path, res, n, 0);
  return res.length;
};

var backtrack = (board, path, res, n, depth) => {
  // end condition
  if (path.length == n) {
    let solution = [];
    for (let col of path) {
      let ele = board.slice();
      ele[col] = 'Q';
      solution.push(ele.join(''));
    }
    res.push(solution);
    return;
  }
  // make a choice
  for (let i = 0; i < n; i++) {
    if (path.length == 0 || isValid(depth, i, path)) {
      // 进行选择
      path.push(i);
      backtrack(board, path, res, n, depth + 1);
      // 撤销选择
      path.pop();
    }
  }
}

// 给两个皇后的坐标 判断这两个皇后是否会互相攻击
// 同一横线 同一竖线 同一斜线
var isValid = (m, n, path) => {
  for (let i = 0; i < path.length; i++) {
    // 横坐标相等 纵坐标相等 横坐标坐标差值相等
    if (m == i || n == path[i] || Math.abs(m - i) == Math.abs(path[i] - n)) {
      return false;
    }
  }
  return true;
}
// @lc code=end

