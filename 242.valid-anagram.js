/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 判断是否是相同字母集组成的
// solution 1 : sort
var isAnagram1 = function (s, t) {
  if (s.length != t.length) return false;
  let arr1 = s.split('');
  let arr2 = t.split('');
  arr1.sort();
  arr2.sort();
  return arr1.join('') == arr2.join('');
};

// solution 2: 哈希表
// 出现的字母与次数均相等
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let dict = {}, n = s.length;
  for (let i of s) {
    if (dict.hasOwnProperty(i)) {
      dict[i]++;
    } else {
      dict[i] = 1;
    }
  }
  for (let i of t) {
    if (!dict.hasOwnProperty(i)) return false;
    dict[i]--;
  }
  for (let i of Object.values(dict)) {
    if (i != 0) return false;
  }
  return true;
}
// @lc code=end

