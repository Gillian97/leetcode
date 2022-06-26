/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// solution: two pointers
// 借鉴之前的做题经验, 这题算是完成的比较快
// 后面的值覆盖前面的值没有关系,因为需要的每个值已经被保留了
// 即使后面再被覆盖也没有关系
var moveZeroes = function (nums) {
  let len = nums.length, i = 0;
  for (let j = 0; j < len; j++) {
    if (nums[j] != 0) {
      nums[i] = nums[j];
      i++;
    }
  }
  for (let t = i; t < len; t++) {
    nums[t] = 0;
  }
  // console.log(nums);
  return nums;
};

let test = [0, 1, 0, 3, 12]
moveZeroes(test)
// @lc code=end

