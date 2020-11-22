/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// solution 1: 使用循环
var addDigits1 = function (num) {
  return helper(num.toString());
};

var helper = (str) => {
  if (str.length == 1) return str;
  let res = 0;
  for (let i of str) {
    res += Number(i);
  }
  return helper(res.toString());
}

// solution 2: 不使用递归/循环
// 数学方法
// 如果一个数字是9的倍数, 则加起来的结果一定是9
// 数字是 0, 则结果是 0
// 其余情况则是 n % 9
// n % 9 = (d0+d1+...+dk) % 9
var addDigits = function (num) {
  return num == 0 ? 0 : 1 + (num - 1) % 9;
};
// @lc code=end

