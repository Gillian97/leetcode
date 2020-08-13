/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 找到最长的回文子串
// 暴力解法 超时
/*
var longestPalindrome = function (s) {
  let len = s.length;
  let maxSubLen = 0;
  let resStr = '';
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      let subStr = s.substring(i, j + 1);
      let subStrR = subStr.split("").reverse().join("");
      if (subStr == subStrR && subStr.length > maxSubLen) {
        maxSubLen = subStr.length;
        resStr = subStr;
      }
    }
  }
  console.log(resStr);
  return resStr;
};
*/

// 动态规划解法
// S[i:j]是回文串 <= S[i-1:j-1]是回文串 && S[i]=S[j]
/**
 * 
 * 状态转移方程:
 * P(i,j)=P(i+1,j−1)∧(S[i]==S[j]
 * 
 * 边界条件:
 * P(i,i)=true 单个字符肯定是回文串
 * P(i,i+1)=(S[i]==S[i+1]) 两个字符相等肯定是回文串
 * 
 * 最后的答案就是: P(i,j) == true && j-i+1 为最大值
 */
var longestPalindrome = function (s) {
  let len = s.length;
  const dp = []; // 标记S[i]-S[j]是否是回文串
  // 枚举子串的长度
  for (let i = len - 1; i >= 0; i--) {
    dp[i] = [];
  }
  console.log(dp);
}


let test = 'cbbddbb';
longestPalindrome(test);
// @lc code=end

