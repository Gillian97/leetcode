/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi1 = function (s) {
  s = s.trim(); // 去除首尾空白
  let n = s.length;
  if (n == 0) return 0;
  if (/[+-]/.test(s[0]) || isNumber(s[0])) {
    // 截取数字部分
    for (let i = 1; i < s.length; i++) {
      if (!isNumber(s[i])) {
        s = s.slice(0, i);
        break;
      }
    }
    // 转换为数字
    return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648);
  } else {
    return 0;
  }
};

var isNumber = (ch) => {
  let code = ch.charCodeAt();
  let code0 = '0'.charCodeAt();
  let code9 = '9'.charCodeAt();
  return code >= code0 && code <= code9;
}

// js 的一种简便解法
// parseInt 会忽略前后空格, 忽略不能转换为数字的字符
// 如果不能转换 则会返回 NaN, NaN || 0 返回 0
var myAtoi = function (s) {
  return Math.max(Math.min(parseInt(s) || 0, 2147483647), -2147483648);
}

// @lc code=end

