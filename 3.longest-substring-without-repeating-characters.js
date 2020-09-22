/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === '')
    return 0; //没有子串
  let mySet = new Set();
  let maxLen = 0, start = 0, i = 0;
  while (i < s.length) {
    if (!mySet.has(s[i])) {
      mySet.add(s[i]);
      i++;
      // 当字符串遍历结束时,返回当前字符串长度与maxLen较大的哪一个
      // 此时的子串是后面可能的子串中,长度最长的
      // 只需要和前面的所有子串中的最大长度比较即可
      if (i == s.length) {
        let len = Array.from(mySet).length;
        return len > maxLen ? len : maxLen;
      }
    } else {
      // 子集不能包含重复元素
      // 因此有重复元素时, 子集需要重新计算
      // 记录最大长度
      let len = Array.from(mySet).length;
      maxLen = maxLen > len ? maxLen : len;
      // 重复的元素不一定是挨在一起的
      // 所以需要使用start来标记子串起始的位置
      start = start + 1;
      i = start;
      mySet = new Set(); // 子集置空
    }
  }
  return maxLen;
};

let test = 'dvdf';
let l = lengthOfLongestSubstring(test);
// @lc code=end

