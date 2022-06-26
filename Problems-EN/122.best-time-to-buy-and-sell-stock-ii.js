/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 动态规划
// dp[i][0] dp[i][1]
// dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
// dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])
// dp[0][0] = 0;
// dp[0][1] = -prices[0];
// 所求的结果是 dp[n-1][0]
var maxProfit1 = function (prices) {
  let n = prices.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = [0, 0];
  }
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }
  // 最后一定是 清仓
  return dp[n - 1][0];
};

// 只存储两个状态 节省空间
var maxProfit = function (prices) {
  let n = prices.length;
  let dp0 = 0, dp1 = -prices[0];
  let newDp0 = 0, newDp1 = 0;
  for (let i = 1; i < n; i++) {
    newDp0 = Math.max(dp0, dp1 + prices[i]);
    newDp1 = Math.max(dp1, dp0 - prices[i]);
    dp0 = newDp0;
    dp1 = newDp1;
  }
  return dp0;
};

maxProfit([2, 3, 4, 5])
// @lc code=end

