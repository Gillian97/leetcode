/*
 * @lc app=leetcode id=154 lang=javascript
 *
 * [154] Find Minimum in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 有重复元素需要注意的点就是
// nums[mid]可能等于nums[left]或者nums[right]
/**
 * @param {number[]} nums
 * @return {number}
 */
// 有重复元素需要注意的点就是
// nums[mid]可能等于nums[left]或者nums[right]
var findMin = function (nums) {
  let len = nums.length;
  let left = 0, right = len - 1, mid = 0, min = nums[0];
  while (left <= right) {
    if (left == right) {
      min = Math.min(nums[left], min);
      break;
    }
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == nums[left]) {
      min = Math.min(nums[left], min); // 相等也可能会出现几次 每次的值不一定一样 [1,1,2,0,0,1]
      left = left + 1;
    } else if (nums[mid] > nums[left]) { // 需要标记较小值 nums[left]
      min = Math.min(nums[left], min); // [10,1,10,10]
      left = mid + 1;
    } else if (nums[mid] == nums[right]) {
      // min = Math.min(nums[right], min); 
      // eg.[2,1,1,1] 最后nums[left]==nums[mid] left+1==right then left++
      // 此时left==right 会将nums[left]与min再次比较 因此 nums[right] 值不会丢失
      right = right - 1;
    } else if (nums[mid] < nums[right]) { // 需要标记较小值 nums[mid]
      min = Math.min(nums[mid], min);
      right = mid - 1;
    }
  }
  return min;
};
// @lc code=end

