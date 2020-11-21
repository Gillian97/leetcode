/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length != t.length) return false;
  let n = s.length;
  let dict = {};
  // 不用管对应的字符是否相等
  // 映射关系才是应该考虑的
  for (let i = 0; i < n; i++) {
    if (dict.hasOwnProperty(s[i])) {
      if (dict[s[i]] != t[i]) return false;
    } else {
      if (Object.values(dict).includes(t[i])) return false;
      dict[s[i]] = t[i];
    }
  }
  return true;
};
// @lc code=end

