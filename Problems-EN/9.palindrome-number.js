/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 数字回文后一定与原来数字相等
var isPalindrome = function (x) {
  // 负数不是回文
  if (x < 0) return false;
  // 
  let re = 0, nums = [], target = x;
  // 将x的各个数位的数字拿出来
  // nums中存储的是逆序
  while (x != 0) {
    re = x % 10; // 取余
    nums.push(re);
    x = Math.floor(x / 10); // 取商
  }
  // 将逆序的各个数字转变为完整数字
  let num = 0, len = nums.length;
  for (let i = 0; i < len; i++) {
    num += nums[i] * Math.pow(10, len - i - 1);
  }
  /*
  性能也没好到哪里去
  let num = 0;
  while (nums.length > 0) {
    num += nums.shift() * Math.pow(10, nums.length);
  }
  */
  return num == target;
};
// @lc code=end

