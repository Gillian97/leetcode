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
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let j = i+1;
    while (nums[j] == nums[i]) {
      nums.splice(j, 1);
    }
  }
};

let numsTest  = [0, 0, 0, 0, 1, 1, 1, 1]
removeDuplicates(numsTest)
console.log(numsTest);
// @lc code=end

