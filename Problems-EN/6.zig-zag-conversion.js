/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
// 主要是字符串的处理,没有什么特殊的
var convert = function (s, numRows) {
  // 特殊情况特殊处理
  if (s === '') return '';
  if (numRows == 1 || numRows >= s.length) return s;

  // 初始化空的结果列表
  let res = [];
  for (let i = 0; i < numRows; i++) {
    res.push('');
  }

  // 计算每一组的长度, 每个组逐个往结果数组里加
  let group = 2 * numRows - 2;
  let start = 0,
    id = 0; // 标记结果数组中的每一组

  while (start <= s.length) {

    let next = start + group;
    let end = next < s.length ? next : s.length;

    for (let i = start; i < end; i++) {
      // 从下往上加
      if (i >= start + numRows) {
        id--;
        res[id] += s[i];
        // 当id==1时,id--使id指向第一个数组,为下一次for循环从头开始添加元素做准备
        // 这里执行结束,则退出for循环
        if (id == 1) id--;
      } else { // 从上往下加
        res[id] += s[i];
        id++;
        // 当到底部时,再id--保持id标记最后一个数组
        if (id == numRows) {
          id--;
          // 特殊情况 当numRows == 2时,每次都是从上往下加,不会从下往上,所以这里id--
          if (numRows == 2) id--;
        }
      }
    }
    // 起始位置向后挪
    start = start + group;
  }
  // 拼接成字符串
  let str = '';
  for (let i = 0; i < numRows; i++) {
    str += res[i];
  }
  return str;
};

let test = 'ABC', n = 2;
let res = convert(test, n);
// console.log(res);
// @lc code=end

