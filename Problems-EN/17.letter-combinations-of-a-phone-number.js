/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

const { strict } = require("assert");

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// 数学里面的排列组合
var letterCombinations = function (digits) {
  if (digits == '')
    return []
  let mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  };
  let arr = new Array();
  let str = '';
  let i = 0;
  recur(arr, digits, mapping, str, i);
  // console.log('arr:', arr);
  return arr;
};

/**
 * 
 * @param {array} arr 
 * @param {string} digits 
 * @param {object} mapping 
 * @param {string} str 
 * @param {number} i 
 * 
 * 回溯法
 * 回溯是一种通过穷举所有可能情况来找到所有解的算法。
 * 如果一个候选解最后被发现并不是可行解，回溯算法会舍弃它，
 * 并在前面的一些步骤做出一些修改，并重新尝试找到可行解。
 * 
 * 大体思路是:
 * 比如 23
 * 1. 找到第一个串 i=0, 这里是 2 对应的串 abc
 * 2. 遍历abc中的每个字符,将每个字符放进最后准备输出的 str 中
 * 3. 从 abc 中选择一个char加入后, 再加入char就要从 def 中找, 即 i=1
 * 4. 如此循环
 * 
 * 时间复杂度： O(3^N * 4^M)，其中 N 是输入数字中对应 3 个字母的数目（比方说 2，3，4，5，6，8）， 
 * M 是输入数字中对应 4 个字母的数目（比方说 7，9），N+M 是输入数字的总数。
 * 
 * 空间复杂度：O(3^N * 4^M), 这是因为需要保存 3^N * 4^M 个结果
 */
var recur = (arr, digits, mapping, str, i) => {
  if (str.length == digits.length) {
    arr.push(str);
    return;
  }
  let s = mapping[digits[i]];
  for (let j = 0; j < s.length; j++) {
    recur(arr, digits, mapping, str + s[j], i + 1);
  }
}

letterCombinations('234');
// @lc code=end

