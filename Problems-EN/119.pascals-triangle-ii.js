/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

const { get } = require("http");

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex == 0) return [1];
  if (rowIndex == 1) return [1, 1];
  let pre = [1, 1];
  let arr = [1];
  for (let i = 0; i < rowIndex - 1; i++) {
    for (let j = 0; j < pre.length - 1; j++) {
      arr.push(pre[j] + pre[j + 1]);
    }
    arr.push(1);
    pre = arr.slice();
    arr = [1];
  }
  return pre;
};

getRow(3)
// @lc code=end

