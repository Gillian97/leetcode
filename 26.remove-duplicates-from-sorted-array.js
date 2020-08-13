/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// my solution
/*
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    while (nums[j] == nums[i]) {
      nums.splice(j, 1);
    }
  }
};
*/

// 参考双指针的方法, 优化了解法
// js的数组越界不会报错,只会得到 undefined 值
var removeDuplicates = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] != nums[j + 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

let numsTest = [0, 0]
removeDuplicates(numsTest)
console.log(numsTest);
// @lc code=end

