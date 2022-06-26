/*
 * @lc app=leetcode id=44 lang=javascript
 *
 * [44] Wildcard Matching
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
// 通俗的做法
var isMatch = function (s, p) {
  let i = 0, j = 0, star = -1, index_i = 0;
  while (i < s.length) {
    if (j < p.length && (p[j] == '?' || p[j] == s[i])) {
      i++;
      j++;
    } else if (j < p.length && p[j] == '*') {
      index_i = i; // 记录i的位置
      star = j; // 记录star的位置
      j++;
    } else if (star != -1) { // 不等且有* 也就是遇到不等的情况就从星号开始
      j = star + 1;
      i = index_i + 1;
      index_i++;
    } else {
      return false;
    }
  }
  // 字符串s已经遍历完
  // 需要剩下的p均是*才算匹配成功
  while (j < p.length) {
    if (p[j] !== '*') {
      return false;
    }
    j++;
  }
  return true;
};

let s1 = 'acdcb', p1 = 'a*c?b';
console.log(isMatch(s1, p1));

// @lc code=end

