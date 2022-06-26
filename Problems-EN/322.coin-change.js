/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// 备忘录递归解法
var coinChange1 = function (coins, amount) {
  let note = {}
  return helper(amount, coins, note);
};

var helper = (target, coins, note) => {
  if (target == 0) return 0;
  if (target < 0) return -1;
  if (note.hasOwnProperty(target)) return note[target];
  let min = Infinity;
  for (let coin of coins) {
    let subPro = helper(target - coin, coins, note);
    if (subPro < 0) continue;
    min = Math.min(min, subPro + 1);
  }
  note[target] = !Number.isFinite(min) ? -1 : min;
  return note[target];
}

// dp 迭代解法
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    let min = Infinity;
    for (let coin of coins) {
      if (i - coin < 0) continue;
      if (dp[i - coin] >= 0)
        min = Math.min(min, dp[i - coin] + 1);
    }
    dp[i] = !Number.isFinite(min) ? -1 : min;
  }
  return dp[amount];
};

let coins = [186, 419, 83, 408]
let amount = 6249
coinChange(coins, amount);
// @lc code=end

