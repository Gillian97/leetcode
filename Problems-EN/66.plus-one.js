/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  // c 表示进位
  let i = len - 1, c = 1;
  while (i >= 0) {
    // 没有向前进位, 就 +1 结束
    if (digits[i] + c < 10) {
      digits[i]++;
      break;
    } else if (i == 0) { 
      // 首位元素 +1 后有进位, 向数组头部插入 1 结束
      digits[i] = 0;
      digits.unshift(1);
      break;
    } else {
      // 不是首位元素 +1 后有进位
      // 当前元素设为 0 , 继续看更高位元素
      digits[i] = 0;
      i--;
    }
  }
  // console.log(digits);
  return digits;
};

let test = [1, 9, 9];
plusOne(test);
// @lc code=end

