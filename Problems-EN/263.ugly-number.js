/*
 * @lc app=leetcode id=263 lang=javascript
 *
 * [263] Ugly Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
  if (num == 0) return false;
  let arr = [2, 3, 5], flag = false;
  while (num > 1) {
    flag = false;
    for (let i of arr) {
      if (num % i == 0) {
        flag = true;
        num = num / i;
        break;
      }
    }
    if (!flag) return false;
  }
  return num == 1;
};
// @lc code=end

