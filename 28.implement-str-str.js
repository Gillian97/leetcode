/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle == '')
    return 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      if (isEqual(haystack, needle, i))
        return i;
      else
        continue;
    }
  }
  return -1
};

var isEqual = (haystack, needle, i) => {
  for (let j = 0; j < needle.length; j++) {
    if (needle[j] != haystack[i])
      return false
    else
      i++;
  }
  return true
}

// @lc code=end

