/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 这个是在评论里看见的方法, 太巧妙了吧!!令人心动!!
// 最后总有括号是闭合的, 不断将闭合括号替换为空,最后如果格式正确, 则一定为空
var isValid = function (s) {
  while (s.indexOf('()') >= 0 || s.indexOf('{}') >= 0 || s.indexOf('[]') >= 0) {
    s = s.replace(/\(\)/g, '')
    s = s.replace(/\[\]/g, '')
    s = s.replace(/\{\}/g, '')
  }
  return s=='';
};
// @lc code=end

