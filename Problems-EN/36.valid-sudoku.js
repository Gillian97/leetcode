/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/**
 * 
 * 合法的数独需要满足三条规则
 * 是不是不需要填满整个数独就能知道其合法性
 * 1. 行不能有数字重复
 * 2. 列不能有数字重复
 * 3. 每个方块小格子数字不能有重复
 */
// 思路比较简单
// 就是检查每行每列每个box是否均符合规则
// 使用map来检查非空元素是否有重复
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    // 存在行或列不合法
    if (!checkRowOrCol(i, board)) {
      return false;
    }
    if (i == 0 || i == 3 || i == 6) {
      for (let j = 0; j <= 6; j = j + 3) {
        // 存在某个box不合法
        if (!checkBox(i, j, board)) {
          return false;
        }
      }
    }
  }
  return true;
};

// 检查第index行/第index列
var checkRowOrCol = (index, board) => {
  // check row
  let map1 = {}, ch1 = '';
  for (let y = 0; y < 9; y++) {
    ch1 = board[index][y];
    if (ch1 != '.') {
      if (map1.hasOwnProperty(ch1)) {
        return false;
      } else {
        map1[ch1] = '1';
      }
    }
  }
  // check col
  let map2 = {}, ch2 = '';
  for (let x = 0; x < 9; x++) {
    ch2 = board[x][index];
    if (ch2 != '.') {
      if (map2.hasOwnProperty(ch2)) {
        return false;
      } else {
        map2[ch2] = '1';
      }
    }
  }
  return true;
}

var checkBox = (row, col, board) => {
  let map = {}, ch = '';
  for (let x = row; x <= row + 2; x++) {
    for (let y = col; y <= col + 2; y++) {
      ch = board[x][y];
      if (ch != '.') {
        if (map.hasOwnProperty(ch)) {
          return false
        } else {
          map[ch] = '1';
        }
      }
    }
  }
  return true;
}
// @lc code=end

