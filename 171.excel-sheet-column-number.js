/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 字符串从右往左遍历
var titleToNumber = function (s) {
  let n = s.length;
  let codeA = 'A'.charCodeAt();
  let arr = [], carry = 0;
  for (let i = n - 1; i >= 0; i--) {
    let code = s[i].charCodeAt() - codeA + 1 + carry;
    if (code >= 26) {
      arr.push(code - 26);
      carry = 1;
    } else {
      arr.push(code);
      carry = 0;
    }
  }
  if (carry == 1) arr.push(1);

  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res += arr[i] * Math.pow(26, i);
  }
  return res;
};
// @lc code=end

