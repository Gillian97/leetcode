/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 两个指针遍历一次字符串 时间复杂度O(N) 空间复杂度 O(1)
var isPalindrome = function (s) {
  // 处理特殊情况
  if (s == '') return true;
  // 去掉所有的非字母数字的符号
  // 字母大小写忽略 处理时大写转小写
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  // 两个指针进行回文判断
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (s[i] != s[j]) return false;
    i++;
    j--;
  }
  return true;
};

let str = "A man, a plan, a canal: Panama";
isPalindrome(str);
// @lc code=end

