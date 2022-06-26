/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 两个单词之间的编辑距离取决于更小单词之间的编辑距离
// 三种途径
// dp 数组迭代解法
var minDistance = function (word1, word2) {
  let n1 = word1.length, n2 = word2.length;
  // 考虑到字符串为空串的情况
  let dp = new Array(n1 + 1);
  let temp = new Array(n2 + 1);
  temp.fill(0);
  for (let i = 0; i <= n1; i++) dp[i] = temp.slice();
  for (let i = 0; i <= n1; i++) dp[i][0] = i;
  for (let j = 0; j <= n2; j++) dp[0][j] = j;

  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      let left = dp[i][j - 1] + 1;
      let upper = dp[i - 1][j] + 1;
      let corner = dp[i - 1][j - 1];
      // 对于字符串 需要下标减 1
      if (word1[i - 1] != word2[j - 1]) corner = dp[i - 1][j - 1] + 1;
      dp[i][j] = Math.min(left, upper, corner);
    }
  }
  return dp[n1][n2];
};
// @lc code=end

