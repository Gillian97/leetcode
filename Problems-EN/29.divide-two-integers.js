/*
 * @lc app=leetcode id=29 lang=javascript
 *
 * [29] Divide Two Integers
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 将除法转换为对数计算
var divide1 = function (dividend, divisor) {
  if (dividend == 0) return 0;
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let res = Math.exp(Math.log(a) - Math.log(b));
  res = Math.floor(res);
  // 异或运算 相同为 0 不同为 1
  if ((dividend > 0) ^ (divisor > 0)) res = -res;
  let maxVal = 2147483647, minVal = -2147483648;
  // 根据题目要求
  if (res > maxVal || res < minVal) return maxVal;
  return res;
};

// 使用移位操作 对除数进行分解
var divide = (dividend, divisor) => {
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let x = a;
  let res = 0;
  // 被除数 > 除数
  while (x >= b) {
    let i;
    for (i = 0; ; i++) {
      if (Math.pow(2, i) * b > x) break;
    }
    let num = Math.pow(2, i - 1);
    res += num;
    x = x - num * b;
  }
  // 异或运算 相同为 0 不同为 1
  if ((dividend > 0) ^ (divisor > 0)) res = -res;
  let maxVal = 2147483647, minVal = -2147483648;
  // 根据题目要求
  if (res > maxVal || res < minVal) return maxVal;
  return res;
}
// @lc code=end

