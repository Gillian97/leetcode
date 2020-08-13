/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 考点应该是二分查找

var searchInsert = function (nums, target) {

  if (nums.length == 0)
    return 0
  let start = 0, end = nums.length - 1, mid = 0;
  if (target > nums[end])
    return end + 1;
  // if (target < nums[start])
  //   return 0;
  // if (target == nums[start])
  //   return start

  while (end > start) {
    mid = start + parseInt((end - start) / 2); // parseInt 直接丢弃小数部分, 保留整数部分
    console.log('mid: ', mid, ' start: ', start, ' end: ', end);
    if (target == nums[start])
      return start;
    if (target == nums[end])
      return end;
    if (target == nums[mid])
      return mid;

    if (target > nums[mid]) {
      start = mid + 1;
      // console.log('target > mid', 'start: ', start);
    } else {
      end = mid;
      // console.log('target < mid', 'end: ', end);
    }
  }

  return start
}

let test = [1, 3, 5, 6, 8, 10, 12, 14, 16];
let res = searchInsert(test, 2);
console.log(res);
// @lc code=end

