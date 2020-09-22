/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 楼梯一共有n层
// 需要返回达到n层总共的路径数
// 到达每一层都有两种方式, 要不跨一步, 要不跨两步
// 假设到达i层的方法数为dp[i], 则dp[i] = dp[i-1] + dp[i-2]
var climbStairs = function (n) {
  let way = new Array(n);
  way.fill(0);
  way[0] = 1;
  way[1] = 2;
  for (let i = 2; i < n; i++) {
    way[i] = way[i - 1] + way[i - 2];
  }
  return way[n - 1];
};
// @lc code=end

