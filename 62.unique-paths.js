/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// solution 1 : 排列组合
// 使用数学上的排列组合计算公式
/*
var uniquePaths = function (m, n) {
  // 起点到终点一共需要走 m-1+n-1 = m+n-2 步
  // 其中从总步数中选出向右的 m-1 步
  return jc(m + n - 2) / (jc(m - 1) * jc(n - 1))
};

var jc = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  return res;
}
*/

// solution 2 : 动态规划
// 假设到点(i,j)的所有路径数表示为 dp(i,j)
// dp(i,j) = dp(i-1,j) + dp(i,j-1)
var uniquePaths = function (m, n) {
  let dp = {};
  // 只能向右或向下
  // 所以到达边界的点的方法数=1
  dp[key(0, 0)] = 1;
  for (let i = 1; i < m; i++) {
    dp[key(i, 0)] = 1;
  }
  for (let j = 1; j < n; j++) {
    dp[key(0, j)] = 1;
  }
  // 时间复杂度O(mn)
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[key(i, j)] = dp[key(i - 1, j)] + dp[key(i, j - 1)];
    }
  }
  return dp[key(m - 1, n - 1)]
};

var key = (i, j) => {
  return i + '/' + j
}

uniquePaths(1, 2);

// @lc code=end

