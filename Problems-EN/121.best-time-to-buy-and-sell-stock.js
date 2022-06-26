/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let n = prices.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (prices[j] > prices[i]) {
        max = Math.max(prices[j] - prices[i], max);
      }
    }
  }
  return max;
};

let prices = [7, 1, 5, 3, 6, 4];
maxProfit(prices);
// @lc code=end

