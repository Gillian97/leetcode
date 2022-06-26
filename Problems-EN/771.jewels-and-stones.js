/*
 * @lc app=leetcode id=771 lang=javascript
 *
 * [771] Jewels and Stones
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
// solution 1
// 哪里考点是树 没看出来 期待官方解答
// 只看出来操作字符串
var numJewelsInStones = function (J, S) {
  let count = 0;
  for (let stone of S) {
    if (J.indexOf(stone) >= 0) {
      count++;
    }
  }
  return count;
};
// @lc code=end

