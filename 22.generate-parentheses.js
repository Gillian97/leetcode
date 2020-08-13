/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯又是我的知识盲区了
var generateParenthesis = function (n) {
  // 思路: 2*n 是括号总数, 对括号进行排列组合, 再除去不合题意的部分
  let arr = new Array();
  let level = 0, sum = 2 * n, str = '';
  recur(level, sum, str, arr);

};

var recur = (level, sum, str, arr) => {
  if (level == sum && str.length == sum) {
    arr.push(str);
    return;
  }
  recur(level, sum, str + '(', arr);
  recur(level, sum, str + ')', arr);
}
// @lc code=end

