/*
 * @lc app=leetcode id=10 lang=javascript
 *
 * [10] Regular Expression Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 动态规划
// 状态 dp 择优 base case

// 比较字符串是否相等的递归写法
var matchStr = function (s, p) {
  if (s.length == 0) return p.length == 0;
  let firstMatch = p.length != 0 && p[0] == s[0];
  return firstMatch && matchStr(s.slice(1), p.slice(1));
};

// 考虑.运算符
var isMatch1 = function (text, pattern) {
  if (pattern.length == 0) return text.length == 0;
  let firstMatch = text.length != 0 && (pattern[0] == '.' || pattern[0] == text[0]);
  return firstMatch && isMatch(text.slice(1), pattern.slice(1));
};

// 考虑*运算符
// 暴力递归解法
var isMatch2 = function (text, pattern) {
  if (pattern.length == 0) return text.length == 0;
  let firstMatch = text.length != 0 && (pattern[0] == '.' || pattern[0] == text[0]);
  if (pattern.length >= 2 && pattern[1] == '*') {
    // 如果发现有字符和*结合
    // 匹配该字符 || 不匹配该字符
    return firstMatch && isMatch(text.slice(1), pattern) || isMatch(text, pattern.slice(2))
  } else {
    return firstMatch && isMatch(text.slice(1), pattern.slice(1));
  }
};

// 进行子问题的优化
// 使用备忘录 存在重叠子问题
var isMatch = (text, pattern) => {
  let note = {};
  var dp = (i, j) => {
    let key = i + '/' + j;
    if (!note.hasOwnProperty(key)) {
      if (j >= pattern.length) return i >= text.length;
      let firstMatch = i < text.length && (pattern[j] == '.' || pattern[j] == text[i]);
      if (j < pattern.length - 1 && pattern[j + 1] == '*') {
        note[key] = firstMatch && dp(i + 1, j) || dp(i, j + 2);
      } else {
        note[key] = firstMatch && dp(i + 1, j + 1);
      }
    }
    return note[key];
  }
  return dp(0, 0);
}
// @lc code=end

