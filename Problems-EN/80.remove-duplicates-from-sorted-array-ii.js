/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组是排好序的
// 不能使用额外空间,直接修改数组
// 使所有元素出现次数最多不超过2次
var removeDuplicates = function (nums) {
  let len = nums.length;
  let left = 0, right = 1;
  while (right < len) {
    if (nums[right] == nums[left] && right - left == 1) {
      right++;
      continue;
    }
    // 说明至少是第三个相同的元素
    // 需要将该元素删除
    if (nums[right] == nums[left] && right - left > 1) {
      nums.splice(right, 1);
      // 删除元素时会影响原数组的长度
      // 但是right仍然需要控制不能超过数组的边界
      len = nums.length;
      continue;
    }
    // right和left指向的元素不同
    left = right;
    right = right + 1;
  }
  // 当right==len的时候,说明数组遍历结束
  // 返回当前删除重复元素后的数组长度
  return len;
};

let test = [1, 1, 1]
removeDuplicates(test)
// @lc code=end

