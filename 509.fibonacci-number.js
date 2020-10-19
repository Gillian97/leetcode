/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/* 递归法 */
var fib = function (N) {
  if (N == 0 || N == 1) return N;
  return fib(N - 1) + fib(N - 2);
};
// @lc code=end

