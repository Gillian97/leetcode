/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
// 这个看起来怎么与二分查找有关 明明是调用数学api hhh
// 开根号 小数部分舍弃
// 不断二分查找 计算mid*mid 与目标值比较
var mySqrt = function (x) {
  let left = 1, right = x, mid = 0, prod = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    prod = mid * mid;
    if (prod == x) {
      return mid;
    } else if (prod > x) {
      right = mid - 1;
    } else if (prod < x) {
      left = mid + 1;
    }
  }
  return right;
};
// @lc code=end

