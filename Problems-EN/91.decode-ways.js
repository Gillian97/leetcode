/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// dp(i) 计算以str[i]结尾的字符串有多少种组成方式
// 求和
var numDecodings = function (str) {
  if (str[0] == '0') return 0;
  // 初始化 set 查询是否在范围内
  let set = new Set();
  for (let i = 0; i <= 26; i++) set.add(i.toString());
  let n = str.length;
  let memo = {};
  var dp = (i) => {
    // base case
    if (i == 0) return 1;
    if (i == 1) {
      if (str[i] == '0') return str[0] == '1' || str[0] == '2' ? 1 : 0;
      else return set.has(str.slice(0, 2)) ? 2 : 1;
    }
    if (memo.hasOwnProperty(i)) return memo[i];
    let sum = 0;
    if (str[i] > 0) {
      if (set.has(str.slice(i - 1, i + 1))) sum += dp(i - 2);
      sum += dp(i - 1);
    } else {
      if (set.has(str.slice(i - 1, i + 1))) sum += dp(i - 2);
      else return 0;
    }
    memo[i] = sum;
    return sum;
  }
  return dp(n - 1);
};
// @lc code=end

