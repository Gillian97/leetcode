/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n == 1) return true;
  let yu = 0;
  while (n > 2) {
    yu = n % 2;
    if (yu != 0) return false;
    n = n / 2;
  }
  return n == 2;
};
// @lc code=end

