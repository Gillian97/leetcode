/*
 * @lc app=leetcode id=32 lang=javascript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 连续合法括号的最大长度
// 合法: 左括号数 == 右括号数
// 任意长度左括号数量都大于右括号数量
// 不合法的部分可以直接跳过
// 状态 dp 择优 base case
// dp[i]:表示以str[i]为止, 最长的有效括号的长度
var longestValidParentheses = function (str) {
  let dp = new Array(str.length + 1);
  dp.fill(0);
  // 考虑到边界条件 eg ()
  // str[i] 对应 dp[i+1]
  let left = '(', right = ')';
  // 有效括号一定以')'结尾, 因此只要计算有')'的位置
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    // 共有两种情况引起状态改变
    if (str[i] == right) {
      // ...()
      if (str[i - 1] == left) {
        dp[i + 1] = dp[i - 1] + 2;
      } else if (str[i - dp[i] - 1] == left) {
        // ...))
        // 假设str[i-1]也是有效括号的末尾部分
        dp[i + 1] = dp[i] + 2 + dp[i - dp[i] - 1];
      }
      // 结果是所有值中的最大值
      res = Math.max(res, dp[i + 1]);
    }
  }
  return res;
};
// @lc code=end

