/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 使用异或运算
// 将数组中的所有元素进行异或运算
// 只出现一次的元素是最后的结果
var singleNumber = function (nums) {
  let res = 0
  nums.forEach(val => res = val ^ res)
  return res;
};
// @lc code=end

