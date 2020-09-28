/*
 * @lc app=leetcode id=33 lang=javascript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 比较中间元素与最后一个元素的大小 确定有序区间
// 再将目标值与该区间的首尾元素比较 确定是否在该区域内
// 给定的nums中无重复元素
var search = function (nums, target) {
  let len = nums.length;
  if (len == 0) return -1; // 处理特殊情况
  let left = 0, right = len - 1, mid = 0;
  /** 需要注意的是 有序区间的另外半边 
   * 根据其中间元素与末尾元素(right)对比
   * 仍然可以划分出有序区间 
   * */
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) return mid;
    // 处理在数组中间left==right但是nums[mid]!=target的情况
    // 此时也没有找到目标元素
    if (left == right && nums[mid] != target) return -1;
    // 先判断哪边是有序序列 再看目标元素是否在有序区间内
    // 由于没有重复元素 则不会出现 nums[mid] = nums[right] 的情况
    // 一定会存在升序序列
    if (nums[mid] < nums[right]) { // 右边有序
      // 看目标元素是否在右侧有序区间内
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    } else if (nums[mid] > nums[right]) { // 左边有序
      // 看目标元素是否在左侧有序区间内
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  // 处理target<min(nums)或者target>max(nums) 两种情况
  return -1;
};

let test = [4, 5, 6, 7, 0, 1, 2], t = 3;
search(test, t);
// @lc code=end

