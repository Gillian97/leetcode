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
  let start = 0,
    end = nums.length - 1;
  let mid = start + index(end - start);
  // 数组len=1
  if (start == end) {
    if (target > nums[end])
      return 1
    else if (target < nums[start])
      return 0
    else
      return start
  } else if (end - start == 1) {
    if (target > nums[end])
      return end + 1
    else if (target < nums[start])
      return 0
    else if (target == nums[start])
      return start
    else
      return end
  } else {
    while (end - start > 1) {
      if (target < nums[mid]) {
        console.log('target:' + target + '<' + "nums[" + mid + "]:" + nums[mid]);
        end = mid;
        if (end - start == 1) {
          if (target == nums[start]) {
            return start
          } else if (target < nums[start]) {
            return 0
          } else {
            return start + 1
          }
        } else {
          mid = start + index(end - start);
        }
      } else if (target > nums[mid]) {
        console.log('target:' + target + '>' + "nums[" + mid + "]:" + nums[mid]);
        start = mid;
        if (end - start == 1) {
          if (target == nums[end]) {
            return end
          } else if (target > nums[end]) {
            return end + 1
          } else {
            return start + 1
          }
        } else {
          mid = start + index(end - start);
        }
      } else {
        // console.log(mid);
        return mid;
      }
    }
  }
};

var index = (gap) => {
  if (gap % 2 == 0)
    return gap / 2;
  else
    return (gap + 1) / 2
}

let test = [1, 3];
let res = searchInsert(test, 4);
console.log(res);
// @lc code=end

