/*
 * @lc app=leetcode id=81 lang=javascript
 *
 * [81] Search in Rotated Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
// 原来没有重复元素时 判断有序数组比较好判断 直接比较大小
// 现在有重复元素 无法通过比较中间元素与最右元素的大小来确定哪一边数组是有序的
// 也就无法知道target应该在mid的哪一边
// eg. 1,1,2,3,1,1,1,1,1,1,1,1
// 普遍意义的二分查找不能使用了 但是不能使用遍历的方法(O(N))
// 为了O(logN)的时间复杂度必须想其他方法
var search = function (nums, target) {
  // 先写一个标准的二分查找
  let len = nums.length;
  if (len == 0) return false;
  let left = 0, right = len - 1, mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    // 找到目标元素
    if (target == nums[mid]) return true;
    // 看mid在哪个部分
    // mid in left part
    if (nums[mid] > nums[left]) {
      if (target > nums[mid]) { // target in left and > mid
        left = mid + 1;
      } else if (target < nums[mid] && target >= nums[left]) { // target in left and < mid
        right = mid - 1;
      } else if (target <= nums[right]) { // target in right
        left = mid + 1;
      } else {
        // target 左右部分均不在
        // 考虑测试案例 [1,3,1,1,1] 2
        return false;
      }
      // mid in right part
    } else if (nums[mid] < nums[left]) {
      if (target < nums[mid]) { // target in right and < mid
        right = mid - 1;
      } else if (target > nums[mid] && target <= nums[right]) { // target in right and > mid
        left = mid + 1;
      } else if (target >= nums[left]) { // target in left
        right = mid - 1;
      } else {
        // target 左右部分均不在
        return false;
      }
    } else if (nums[mid] == nums[left]) { // mid in left or right
      // 此时不能根据nums[mid]与target的大小比较确定接下来的收缩范围
      // 不确定是 left=mid+1 or right=mid-1
      left = left + 1; // or right=right-1; 逐步缩小搜索范围
    }
  }
  return false;
};

// @lc code=end

