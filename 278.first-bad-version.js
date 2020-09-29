/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
// 尽可能少的调用api 也就是说 不要使用遍历的方法
// 版本号有序 可以使用二分查找
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0, right = n, mid = 0;
    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid - 1;
      } else {
        // mid 不是坏的 但是下一个是坏的
        // 则 mid+1 是第一个坏的
        // 返回 mid+1
        if (isBadVersion(mid + 1)) {
          return mid + 1;
        } else {
          left = mid + 1
        }
      }
    }
  };
};
// @lc code=end

