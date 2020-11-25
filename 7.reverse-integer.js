/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 翻转32位的整数 如果翻转之后的数字大小超过32位整数的范围
// 则返回 0
var reverse1 = function (x) {
  // 确定32位整数的范围
  let maxVal = Math.pow(2, 31) - 1;
  let minVal = -(maxVal + 1);
  let str = x >= 0 ? x.toString() : (-x).toString();
  let len = str.length;
  // 从后往前依次将字符接入str的末尾 形成翻转
  for (let i = len - 1; i >= 0; i--) {
    str += str[i];
  }
  // 截取翻转后的字符串
  str = str.slice(len);
  // 若是负数 则翻转之后的字符串前面需要加一个'-'
  if (x < 0) str = '-' + str;
  // 将翻转后的字符串转为数字
  // 看是否在规定范围之内
  let num = parseInt(str);
  return (num < minVal || num > maxVal) ? 0 : num;
};

var reverse = (x) => {
  let res = 0;
  let sign = x >= 0;
  x = Math.abs(x);
  while (x > 0) {
    res = res * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  let maxVal = 2147483647, minVal = -2147483648;
  if (sign) {
    return res > maxVal ? 0 : res;
  } else {
    return -res < minVal ? 0 : -res;
  }
}

// reverse(876)
// console.log(Math.pow(2, 31) - 1);
// @lc code=end

