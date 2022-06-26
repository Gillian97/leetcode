/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 肯定有重复元素 可证
// 不修改原数组
// 常数级空间
// 时间复杂度不超过 N^2

// solution 1
// 一种思路是 先排序 再遍历
// 时间复杂度是排序的时间
// 空间要看排序是否是原地排序
var findDuplicate1 = function (nums) {
  nums = nums.sort((a, b) => a - b); // sort
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == nums[i + 1]) {
      return nums[i];
    }
  }
};

// solution 2
// 使用set 空间复杂度O(N)
// 时间复杂度 set本质是hash table, 每次查找插入是常数时间
// 但是进行了N次就是O(N)
var findDuplicate2 = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return nums[i];
    }
    set.add(nums[i]);
  }
};

// solution 3
// @lc code=end

