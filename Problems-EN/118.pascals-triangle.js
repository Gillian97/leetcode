/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows == 0) return [];
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];
  let res = [[1], [1, 1]];
  let pre = [1, 1];
  let arr = [1];
  for (let i = 3; i <= numRows; i++) {
    for (let j = 0; j < pre.length - 1; j++) {
      arr.push(pre[j] + pre[j + 1]);
    }
    arr.push(1);
    res.push(arr.slice());
    pre = arr.slice();
    arr = [1];
  }
  // console.log(res);
  return res;
};

generate(5)
// @lc code=end

