/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 筛选质数 厄拉多塞筛法
var countPrimes = function (n) {
  if (n == 0 || n == 1 || n == 2) return 0;
  let boolArr = new Array(n);
  boolArr.fill(true);
  boolArr[1] = false;
  for (let i = 1; i < n; i++) {
    // 找到一个质数, 就将质数的倍数都划掉
    if (boolArr[i]) {
      let c = 2, val = i * c;
      while (val < n) {
        boolArr[val] = false;
        c++;
        val = i * c;
      }
    }
  }
  let count = -1; // 和 boolArr[0] 抵消
  boolArr.forEach(val => {
    if (val) count++;
  })
  return count;
};
// @lc code=end

