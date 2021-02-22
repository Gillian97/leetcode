/*
 * @lc app=leetcode id=221 lang=javascript
 *
 * [221] Maximal Square
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function (matrix) {
  let m = matrix.length, n = matrix[0].length;
  let dp = new Array(m);
  for (let i = 0; i < m; i++) {
      dp[i] = new Array(n);
      dp[i].fill(0);
  }

  let max = 0;
  for (let i = 0; i < m; i++) {
      dp[i][0] = matrix[i][0] == 1 ? 1 : 0;
      max = Math.max(max, dp[i][0])
  }
  for (let i = 0; i < n; i++) {
      dp[0][i] = matrix[0][i] == 1 ? 1 : 0;
      max = Math.max(max, dp[0][i])
  }
  // console.log(dp)
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (matrix[i][j] == '1') {
              dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
              max = Math.max(max, dp[i][j])
          } else {
              dp[i][j] = 0;
          }
      }
  }
  // console.log(dp)
  return max * max;
};
// @lc code=end

