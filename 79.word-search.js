/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

const { brotliCompress } = require("zlib");

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        const res = findNeighbor(board, word, i, j, {});
        if (res)
          return true
      }
    }
  }
  return false;

};

var findNeighbor = (board, word, row, col, visited) => {

  let key = row + '+' + col;
  console.log('key:', key);
  if (row >= board.length || row < 0
    || col >= board[0].length || col < 0
    || visited[key]
    || board[row][col] != word[0]
  ) {
    return false;
  }

  visited[key] = true;
  word = word.slice(1); // 将第一个字母移除
  console.log('word:', word);
  let res = findNeighbor(board, word, row - 1, col, visited)
    || findNeighbor(board, word, row + 1, col, visited)
    || findNeighbor(board, word, row, col - 1, visited)
    || findNeighbor(board, word, row, col + 1, visited);

  // visited[key] = res;
  return res
}

let board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];
let word = "ABCCED";
exist(board, word)
// @lc code=end

