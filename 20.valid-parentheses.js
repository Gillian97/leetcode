/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 这个是在评论里看见的方法, 太巧妙了吧!!令人心动!!
// 最后总有括号是闭合的, 不断将闭合括号替换为空,最后如果格式正确, 则一定为空
var isValid_miao = function (s) {
  while (s.indexOf('()') >= 0 || s.indexOf('{}') >= 0 || s.indexOf('[]') >= 0) {
    s = s.replace(/\(\)/g, '')
    s = s.replace(/\[\]/g, '')
    s = s.replace(/\{\}/g, '')
  }
  return s == '';
};

// 使用栈
// 后遇到的左括号要先闭合
// 时间复杂度: O(N) 遍历字符串
// 空间复杂度: O(N + |M|), 栈中的字符数量最多为 N, M表示字典中存储的字符数量, 这里为 |M|=6
var isValid = (str) => {
  if (str.length % 2 != 0) return false;
  let note = { '(': ')', '[': ']', '{': '}' };
  let stack = [];
  for (let s of str) {
    if (note.hasOwnProperty(s)) {
      stack.push(s);
    } else {
      let item = stack[stack.length - 1];
      if (stack.length == 0 || note[item] != s) return false;
      stack.pop();
    }
  }
  return stack.length == 0;
}

// @lc code=end

