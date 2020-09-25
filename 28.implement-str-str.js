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
// 直观想法 使用双重循环 
// 最外层循环是对源字符串的遍历
// 需要考虑源字符串剩余长度不够匹配目标字符串的情况
// 建议使用source target这类有意义的变量命名
var strStr = function (haystack, needle) {
  // 目标串为'' 默认出现位置是0
  if (needle == '') return 0;
  // 源串为''(这里needle不为'') 则找不到
  if (haystack == '') return -1;
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
  // 处理源字符串需要比较的串长度小于needle的长度的情况
  if (haystack.length - i < needle.length) return false;
  for (let j = 0; j < needle.length; j++) {
    if (needle[j] != haystack[i])
      return false
    else {
      i++;
    }
  }
  return true;
}

// KMP算法 快速模式匹配算法


// @lc code=end

