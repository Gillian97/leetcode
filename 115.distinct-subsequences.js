/*
 * @lc app=leetcode id=115 lang=javascript
 *
 * [115] Distinct Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const [m, n] = [s.length, t.length];
  if (m < n) return 0;
  const arr = Array(m + 1).fill([]);
  const item = Array(n + 1).fill(0);
  const dp = arr.map(v => {
    return item.slice();
  });
  // dp[i][j]表示s[i:]中t[j:]的个数
  // 其中s的长度是m,t的长度是n
  // 注意这里是倒序,从边界开始推起
  for (let i = m; i >= 0; i--) {
    for (let j = n; j >= 0; j--) {
      // 边界条件
      if (j === n) { dp[i][j] = 1; continue; }
      if (i === m && j < n) { dp[i][j] = 0; continue; }
      // dp[i][j]的计算规则
      // 已有数值推导出未知数值
      if (s[i] === t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
      } else {
        dp[i][j] = dp[i + 1][j];
      }
    }
  }
  return dp[0][0];
};
// @lc code=end

