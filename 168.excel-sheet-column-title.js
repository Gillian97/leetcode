/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 类似十进制转 26 进制
var convertToTitle = function (n) {
  let codeA = 'A'.charCodeAt();
  let str = "";
  while (n > 0) {
    let yu = n % 26;
    if (yu == 0) {
      str += "Z";
      n = n / 26 - 1;
    } else {
      str += String.fromCharCode(yu + codeA - 1);
      n = (n - yu) / 26;
    }
  }
  return str.split('').reverse().join('');
}; 
// @lc code=end

