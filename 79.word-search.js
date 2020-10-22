/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

const { resolve4, LOADIPHLPAPI } = require("dns");

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
// 回溯算法本质就是暴力穷举
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        const res = findNeighbor(board, word, 0, i, j, {});
        if (res) return true;
      }
    }
  }
  return false;
};

var findNeighbor = (board, word, w, row, col, visited) => {
  // 不能在这里进行判断 因为尽管w这里表示最后一个字母
  // 但是却并不一定能在board里找到 需要再经过判断
  // if (w + 1 == word.length) return true;

  // 选择不合法则回到上一层
  let key = row + '+' + col;
  if (row >= board.length || row < 0 || col >= board[0].length || col < 0
    || visited[key] || board[row][col] != word[w]
  ) {
    return false;
  }

  // 选择列表
  // 对一个可能的选择都进行尝试

  // 做选择
  visited[key] = true;
  // 递归结束条件
  // 一旦word的最后一个字母也找到 则说明成功找到word
  if (w + 1 == word.length) return true;
  // 一旦找到目标字符串(递归返回值为true) 就直接返回 不用再进行下面的递归了 减少递归次数
  let r1 = findNeighbor(board, word, w + 1, row - 1, col, visited);
  if (r1) return true;
  let r2 = findNeighbor(board, word, w + 1, row + 1, col, visited);
  if (r2) return true;
  let r3 = findNeighbor(board, word, w + 1, row, col - 1, visited);
  if (r3) return true;
  let r4 = findNeighbor(board, word, w + 1, row, col + 1, visited);
  if (r4) return true;

  // 找了一圈没有找到 说明从该节点开始不是正确的选择
  // 则在该节点应该 撤销选择 回到上一层 在上一层转换搜索方向
  visited[key] = false;
  return false;
}

let board1 = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];
let word1 = "ABCB";
let result = exist(board1, word1);
console.log('result', result);
// @lc code=end

