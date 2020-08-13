/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// solution : 动态规划
// 假设到点(i,j)的所有路径数表示为 dp(i,j)
// 若 obstacleGrid[i][j] 有障碍物,则 dp(i,j) = 0
// dp(i,j) = dp(i-1,j) + dp(i,j-1)
var uniquePathsWithObstacles = function (obstacleGrid) {
  let rowNum = obstacleGrid.length;
  let colNum = obstacleGrid[0].length;
  let dp = {};

  let flag1 = true;
  for (let i = 0; i < rowNum; i++) {
    if (obstacleGrid[i][0] == 1) {
      for (let t = i; t < rowNum; t++) {
        dp[key(t, 0)] = 0;
      }
      flag1 = false;
      break;
    }
    dp[key(i, 0)] = (flag1 == true) ? 1 : 0;
  }

  let flag2 = true;
  for (let j = 0; j < colNum; j++) {
    if (obstacleGrid[0][j] == 1) {
      for (let t = j; t < colNum; t++) {
        dp[key(0, t)] = 0;
      }
      flag2 = false;
      break;
    }
    dp[key(0, j)] = (flag2 == true) ? 1 : 0;
  }

  for (let i = 1; i < rowNum; i++) {
    for (let j = 1; j < colNum; j++) {
      if (obstacleGrid[i][j] == 1)
        dp[key(i, j)] = 0;
      else
        dp[key(i, j)] = dp[key(i - 1, j)] + dp[key(i, j - 1)];
    }
  }
  // console.log(dp[key(rowNum - 1, colNum - 1)]);
  return dp[key(rowNum - 1, colNum - 1)];
};

var key = (i, j) => {
  return i + '/' + j;
}

let test = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];
uniquePathsWithObstacles(test);
// @lc code=end

