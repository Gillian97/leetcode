/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 直接解法 时间复杂度为O(mn)
var longestCommonPrefix = function (strs) {
  let prefix = '';
  if (strs.length == 0)
    return prefix
  // 由于是找最长前缀, 任意选择以一个字符串即可
  let s1 = strs[0];
  for (let j = 0; j < s1.length; j++) {
    let p = s1[j];
    let flag = true;
    for (let i = 1; i < strs.length; i++) {
      if (p != strs[i][j]) {
        flag = false;
        break;
      }
    }
    // flag=true 说明该字符在所有字符串上的相同位置均存在
    // 属于最长前缀的一员
    if (flag) {
      prefix = prefix.concat(p);
    } else {
      break;
    }
  }
  return prefix;
};
let test = ["flower", "flow", "flight"];
longestCommonPrefix(test);
// @lc code=end

