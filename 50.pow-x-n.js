/*
 * @lc app=leetcode id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 快速幂 + 递归
var myPow = function (x, n) {
  if (x == 1 || n == 0) return 1;
  if (x == -1) return n % 2 == 0 ? 1 : -1;
  if (n == 1) return x;

  // 先计算幂
  let N = n > 0 ? n : -n;
  let res = helper(x, N);

  // 再根据正负决定是否取倒数
  return n > 0 ? res : 1 / res;
};

// x -> x^2 -> x^4 -> x^8 ... 
// 已经计算过的部分 使用递归作为参数 避免重复计算
var helper = (x, n) => {
  if (n == 1) return x;
  return n % 2 == 0 ? helper(x * x, n / 2) : helper(x, n - 1) * x;
}
// @lc code=end

