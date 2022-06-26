/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// 主要思路就是, 逐步整除, 然后对商进行对应数位的转换
var intToRoman = function (num) {
  let items = [1000, 100, 10, 1];
  let n, res = ''; // res需要初始化 否则res+=操作时, 由于res的值为udefined, 会在结果头部留一个udefined
  // 从千位除到个位
  // 注意 用let i in items时, typeof i = string
  for (let i = 0; i < items.length; i++) {
    // 得到商
    n = Math.floor(num / items[i]);
    // 根据数位以及商的大小确定对应的罗马数字
    // 并对每一步得到的罗马数字进行拼接
    // 使用索引顺便标记数位
    res += toRoman(i, n);
    // 后一轮需要被整除的数是当前一轮整除后得到的余数
    num = num % items[i];
  }
  return res;
};

var toRoman = (type, n) => {
  let sma = '', mid = '', top = '';
  // 数位不同 相同数字的表达方法不同
  switch (type) {
    case 0: // 千位
      sma = 'M';
      break;
    case 1: // 百位
      sma = 'C'; mid = 'D'; top = 'M';
      break;
    case 2: // 十位
      sma = 'X'; mid = 'L'; top = 'C';
      break;
    case 3: // 个位
      sma = 'I'; mid = 'V'; top = 'X';
      break;
    default:
      break;
  }
  let roman = '';
  // 根据 n 的大小, 转换成对应的罗马数字
  // 千位不会超过3
  if (n >= 0 && n <= 3) { // [0,3]
    let i = 0;
    while (i < n) {
      roman += sma;
      i++;
    }
  } else if (n == 4 || n == 9) { // 4/9
    roman = n == 4 ? sma + mid : sma + top;
  } else { // [5, 8]
    let k = 0;
    roman = mid;
    while (k < n - 5) {
      roman += sma;
      k++;
    }
  }
  return roman;
}

let test = 3;
intToRoman(test)
// @lc code=end

