/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 注意去除字符串前后的空格再进行切割
// 如果s='  ',则没有最后一个单词, arr=[]
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(' ');
  return (arr.length == 0) ? 0 : arr[arr.length - 1].length;
};
// @lc code=end

