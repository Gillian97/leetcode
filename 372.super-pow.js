/*
 * @lc app=leetcode id=372 lang=javascript
 *
 * [372] Super Pow
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const base = 1337;
var superPow = function (a, b) {
  // 解决指数是数组的问题
  // 转化为递归的形式
  if (b.length == 0) return 1;
  let num = b.pop();
  return myPow(a, num) * myPow(superPow(a, b), 10) % base;
  // 考虑乘法避免溢出
  // (a * b) % k = (a % k)(b % k) % k
};

// 计算幂(连乘)的同时包括模运算
var myPow1 = (a, k) => {
  a = a % base;
  let res = 1;
  for (let i = 0; i < k; i++) {
    res = res * a;
    // 对每一步相乘的结果进行模运算
    // 则下一步相乘 res<base a<base
    // 相乘结果不会溢出
    res %= base;
  }
  return res;
}

// 幂计算优化
var myPow = (a, k) => {
  if (k == 0) return 1;
  a = a % base;
  // k 偶数
  if (k % 2 == 0) {
    return Math.pow(myPow(a, k / 2), 2) % base;
  } else {
    return a * myPow(a, k - 1) % base;
  }
}
// @lc code=end

