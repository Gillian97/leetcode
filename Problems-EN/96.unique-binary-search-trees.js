/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* solution 1 递归法 效率比较慢 */
// 每一个节点作为根的情况 有多少组合方式
// 取决于左右的节点数
var numTrees1 = function (n) {
  if (n == 0 || n == 1) return 1;
  let count = 0;
  for (let i = 1; i <= n; i++) {
    count = count + numTrees(i - 1) * numTrees(n - i);
  }
  return count;
};

/* solution 2 */
// 使用 dp 标记每个数目对应的组合方式
// 保证在计算 n 之前, n-1 已经被计算完毕, 才能后面计算 n
var numTrees = function (n) {
  let dp = { 0: 1, 1: 1 };
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      count = count + dp[j - 1] * dp[i - j];
    }
    dp[i] = count;
  }
  return dp[n];
};
// @lc code=end

