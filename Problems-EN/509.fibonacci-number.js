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
/* 暴力穷举法 */
var fib1 = function (N) {
  if (N == 0 || N == 1) return N;
  return fib(N - 1) + fib(N - 2);
};

/* 备忘录法 */
// 将计算过的结果记录下来
var fib2 = function (N) {
  let note = {};
  return helper(N, note);
};

var helper = (N, note) => {
  if (N == 0 || N == 1) return N;
  if (note.hasOwnProperty(N)) {
    return note[N];
  } else {
    let res = helper(N - 1, note) + helper(N - 2, note);
    note[N] = res;
    return res;
  }
}

/* dp 数组解法 进行了空间优化 */
var fib = (N) => {
  let dp = new Array(2);
  // base case
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i <= N; i++) {
    let res = dp[0] + dp[1];
    dp[0] = dp[1];
    dp[1] = res;
  }
  return N == 0 ? dp[0] : dp[1];
}
// @lc code=end

