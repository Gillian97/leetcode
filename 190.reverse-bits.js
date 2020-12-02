/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 多次调用如何优化
var reverseBits = function (n) {
  let arr = n.toString(2).split('');
  while (arr.length < 32) arr.unshift('0');
  let res = arr.reverse().join('');
  // 按照二进制将字符串解析为对应的整数
  return parseInt(res, 2);
};

// let num = 00000010100101000001111010011100;
// reverseBits(num);
// @lc code=end

