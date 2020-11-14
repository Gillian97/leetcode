/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// dp[i, j] 到达每一点的路径值和的最小值
// solution 1: 带备忘录的自顶向下写法
var minPathSum1 = function (grid) {
  let note = {};
  var dp = (i, j) => {
    if (i == 0 && j == 0) return grid[i][j];
    let key = i + '/' + j;
    if (note.hasOwnProperty(key)) {
      return note[key];
    }
    let res = 0;
    if (i == 0) {
      res = dp(i, j - 1) + grid[i][j];
    } else if (j == 0) {
      res = dp(i - 1, j) + grid[i][j];
    } else {
      res = Math.min(dp(i - 1, j), dp(i, j - 1)) + grid[i][j];
    }
    note[key] = res;
    return res;
  }
  return dp(grid.length - 1, grid[0].length - 1);
};

// solution 2 : 采用 dp 数组的自底向上解法
var minPathSum = (grid) => {
  let n = grid.length, m = grid[0].length;
  let dp = new Array(n);
  let temp = new Array(m);
  temp.fill(0);
  dp.fill(temp.slice());
  dp[0][0] = grid[0][0];
  // console.log(dp);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0 && j == 0) continue;
      if (i == 0) dp[i][j] = dp[i][j - 1] + grid[i][j];
      if (j == 0) dp[i][j] = dp[i - 1][j] + grid[i][j];
      if (i > 0 && j > 0) dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[n-1][m-1];
}
// @lc code=end

