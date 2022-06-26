/*
 * @lc app=leetcode id=342 lang=javascript
 *
 * [342] Power of Four
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  let yu;
  while (n > 1) {
    yu = n % 4;
    if (yu != 0) return false;
    n = n / 4;
  }
  return n == 1;
};
// @lc code=end

