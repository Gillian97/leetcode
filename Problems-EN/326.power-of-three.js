/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  let yu;
  while (n > 1) {
    yu = n % 3;
    if (yu != 0) return false;
    n = n / 3;
  }
  return n == 1;
};
// @lc code=end

