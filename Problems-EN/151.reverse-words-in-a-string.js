/*
 * @lc app=leetcode id=151 lang=javascript
 *
 * [151] Reverse Words in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 处理异常情况
  if (s == null) return '';
  // 将字符串的首尾空格去掉
  s = s.trim();
  if (s == '') return '';
  // 将字符串中间的多个空格转换为一个空格
  // 将字符串使用空格进行拆分
  let arr = s.replace(/\s+/g, " ").split(' ');
  let len = arr.length;
  for (let i = len - 1; i >= 0; i--) {
    // 不断将当前元素加入数组末尾
    arr.push(arr[i]);
    // 删除元素或者截取元素均可
    // arr.splice(i, 1); // 再将当前元素删除
  }
  // 再将翻转后的单词列表连接成字符串
  let res = arr.slice(len).join(' ');
  return res;
};
// @lc code=end

