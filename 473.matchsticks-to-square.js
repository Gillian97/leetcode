/*
 * @lc app=leetcode id=473 lang=javascript
 *
 * [473] Matchsticks to Square
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 使用小女孩的所有火柴拼成一个正方形
// 回溯 使用所有的火柴 每根火柴只能用一次
var makesquare = function (nums) {
  let sum = 0;
  nums.forEach((val) => {
    sum += val;
  })
  if (sum % 4 != 0) return false;
  let res = [0, 0, 0, 0];
  helper(nums, 0, res, sum / 4);
  return res[0] != 0;
};

var helper = (nums, index, res, sum) => {
  // 递归结束条件 所有火柴均已放置
  if (index == nums.length) {
    // 找到可行解
    return res[0] == res[1] && res[1] == res[2] && res[2] == res[3];
  }
  
  // 每根火柴均有四个位置可以选择
  for (let j = 0; j < res.length; j++) {
    if (res[j] + nums[index] <= sum) {
      // 做选择
      res[j] += nums[index];
      if (helper(nums, index + 1, res, sum)) {
        return true; // 找到可行解就返回 不再继续尝试
      }
      // 撤销选择
      res[j] -= nums[index];
    }
  }
  // 走到这里说明 剩下的火柴怎么摆放都达不到要求
  // 说明上一层摆错了位置
  return false;
}

let test = [5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3];
// let test = [1,1,2,2,2]
console.log(makesquare(test));
// @lc code=end

