/*
 * @lc app=leetcode id=153 lang=javascript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 首先确定有序的部分 保留其最小值x
// 然后再使用二分查找查找剩下无序部分中的升序部分的最小值 与x比较保留较小值
var findMin = function (nums) {
  let len = nums.length;
  let left = 0, right = len - 1, mid = 0, min = nums[0];
  while (left <= right) {
    // 此时判断一下最小值
    // eg [3,4,5,0,1,2]
    // 最后left==right==3(index)而此时 nums[3]==0 是最小值
    if (left == right) {
      min = Math.min(nums[left], min);
      break;
    }
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) { // right is ordered
      min = Math.min(nums[mid], min); // 获取有序列表的最小值
      right = mid - 1;
    } else if (nums[mid] > nums[right]) { // left is ordered
      min = Math.min(nums[left], min); // 获取有序列表的最小值
      left = mid + 1;
    }
  }
  return min;
};
// @lc code=end

