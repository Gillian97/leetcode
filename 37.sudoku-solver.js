/*
 * @lc app=leetcode id=37 lang=javascript
 *
 * [37] Sudoku Solver
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 写一个填数独的程序 输入的数独之后一种解法
// 穷举 每一个格子穷举1-9 判断是否合法 如果合法则继续穷举 不合法则退回上一步
var solveSudoku = (board) => {
  backtrack(board, 0, 0);
}

var backtrack = function (board, row, col) {
  // 最后一行穷举结束后 结束递归 找到一个可行解之后 才会返回true
  if (row == 9) {
    return true;
  }
  // 穷举超过最后一列时 换到下一行重新开始
  if (col == 9) {
    return backtrack(board, row + 1, 0);
  }
  // 穷举每一个位置
  for (let i = row; i < 9; i++) {
    for (let j = col; j < 9; j++) {
      // 做选择
      if (board[i][j] != '.') {
        // 该位置是数字 直接向右寻找下一个空位
        return backtrack(board, i, j + 1);
      }

      for (let num = 1; num <= 9; num++) {
        // 不合法的数字就跳过(这样写看起来比较简洁)
        if (!isValid(board, i, j, num)) continue;
        board[i][j] = String(num);
        // 继续穷举下一个 找到一个可行解 立即结束
        if (backtrack(board, i, j + 1)) {
          return true;
        }
        // 撤销选择
        board[i][j] = '.';
      }
      // 穷举完1-9 仍然没有找到可行解 说明该种解法不合法
      // 不能留下空白 正常情况是直至填满数独找到可行解 一直在递归中
      // 走到这里说明没有进入递归 即所有数字都不合法
      return false;
    }
  }
};

var isValid = (board, i, j, num) => {
  for (let k = 0; k < 9; k++) {
    // 判断该行有无重复数字
    if (board[i][k] == num) {
      return false;
    }
    // 判断该列有无重复数字
    if (board[k][j] == num) {
      return false;
    }
    // 判断 3*3 方框里有无重复数字 好巧妙
    if (board[Math.floor(i / 3) * 3 + Math.floor(k / 3)][Math.floor(j / 3) * 3 + k % 3] == num) {
      return false;
    }
  }
  return true;
}
// @lc code=end

