/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  let n1 = A.length, n2 = B.length;
  if (n1 != n2) return false;
  let str = ''
  for (let i = 0; i < n1; i++) {
    str = A.slice(i) + A.slice(0, i);
    if (str == B) return true;
  }
  return A == B;
};
// @lc code=end