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
  if (s == '') return '';
  let len = s.length;
  // dp[i][j]标记S[i]-S[j]是否是回文串
  // j > i
  // 每一个节点i只用标记自己与后面的某个点之间的部分是否为回文串
  // i与前面节点的关系由前面节点标记
  let dp = new Array(len);
  for (let i = 0; i < len; i++) {
    let temp = new Array(len - i).fill(false);
    temp[0] = true;
    dp[i] = temp;
  }

  // dp[i][j]是否回文取决于dp[i+1][j-1]是否回文
  // 所以i需逆序 j需正序
  let maxLen = 1, res = s[0];
  // 枚举子串的范围 判断是否是回文
  // 确定子串起点
  for (let i = len - 2; i >= 0; i--) {
    // 子串终点从起点后一位开始
    for (let j = i + 1; j < len; j++) {
      // 考虑对特殊情况进行处理
      // 即两个相邻字符相等也是回文
      if (s[i] == s[j]) {
        if (j == i + 1 || dp[i + 1][j - 1 - (i + 1)]) {
          // 标记是回文
          dp[i][j - i] = true;
          // 只有在是回文的情况下 才去尝试更新maxLen值
          if (maxLen < j - i + 1) {
            // 标记子串内容
            res = s.substring(i, j + 1);
            // 标记最大长度
            maxLen = j - i + 1;
          }
        }
      }
    }
  }
  return res;
}


// let test = 'cb467';
// longestPalindrome(test);
// @lc code=end

