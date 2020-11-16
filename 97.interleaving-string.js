/*
 * @lc app=leetcode id=97 lang=javascript
 *
 * [97] Interleaving String
 */

const { debugPort } = require("process");

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
// dp(i, j) 表示 s1的前i个元素和s2的前j个元素能不能组成 s3的前i+j个元素
// 时间复杂度 mn 空间复杂度 mn
var isInterleave = function (s1, s2, s3) {
  let n1 = s1.length, n2 = s2.length, n3 = s3.length;
  if (n1 + n2 != n3) return false;
  // 初始化数组
  let dp = new Array(n1 + 1);
  let temp = new Array(n2 + 1);
  temp.fill(0);
  for (let i = 0; i < n1 + 1; i++) {
    dp[i] = temp.slice();
  }
  // 填充第一列
  dp[0][0] = true;
  for (let i = 1; i < n1 + 1; i++) {
    dp[i][0] = s1[i - 1] == s3[i - 1] && dp[i - 1][0];
  }
  // 填充第一行
  for (let j = 1; j < n2 + 1; j++) {
    dp[0][j] = s2[j - 1] == s3[j - 1] && dp[0][j - 1];
  }
  // console.log(dp);
  for (let i = 1; i < n1 + 1; i++) {
    for (let j = 1; j < n2 + 1; j++) {
      // 状态转移方程
      dp[i][j] = s1[i - 1] == s3[i + j - 1] && dp[i - 1][j] || s2[j - 1] == s3[i + j - 1] && dp[i][j - 1];
    }
  }
  // console.log(dp);
  return dp[n1][n2];
};

let s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac";
isInterleave(s1, s2, s3);
// @lc code=end

