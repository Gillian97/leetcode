/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} 
 * @return {number}
 */
// 罗马数字一共三种情况
// 百位数字>十位数字>个位数字
// 出现左侧数字比右侧数字小, 只会在某一个数位内部
var romanToInt = function (s) {
  // 从左往右遍历
  let pre = getVal(s[0]), sum = 0, num;
  let len = s.length;
  for (let i = 1; i < len; i++) {
    num = getVal(s[i]);
    // 前一个数字不小于后一个数字, 加上pre
    // 反之, 说明pre是某一数位内部的需要减去的数字, 则减去pre
    // 左侧的被减去的数字只出现一次或者不出现, 不会出现两次
    if (pre >= num) {
      sum += pre;
    } else {
      sum -= pre;
    }
    // 更新pre的值
    pre = num;
  }
  // 最后一位不会再比右边哪个元素小了
  // 所以需要将最后一位加上
  sum += getVal(s[len - 1]);
  return sum;
};

var getVal = (ch) => {
  switch (ch) {
    case 'I':
      return 1;
    case 'V':
      return 5;
    case 'X':
      return 10;
    case 'L':
      return 50;
    case 'V':
      return 5;
    case 'C':
      return 100;
    case 'D':
      return 500;
    case 'M':
      return 1000;
    default:
      return 0;
  }
}

let test = 'III';
romanToInt(test)
// @lc code=end

