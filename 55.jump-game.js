/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 递归超时 使用贪心算法求解
// 局部能够到达的最大范围, 也是全局能够到达的最大范围
var canJump = function (nums) {
  let reach = nums[0];
  // 需要注意的点是,这里reach的值不一定就>1, 所以i不一定就从1开始
  // 还是从0开始能够包含所有情况, 这么写因为有个特例 [0]
  // 同时注意限制 i 的范围, i 是指 reach 能够到达的位置范围, 不能超过 reach
  for (let i = 0; i < nums.length && i <= reach; i++) {
    if (nums[i] + i > reach) {
      reach = nums[i] + i;
      // console.log(reach);
    }
    // 当能到达的范围超过数组的最后 index 时, 返回 true
    if (reach >= nums.length - 1)
      return true
  }
  // 能到达的元素位置都尝试了, 但是没有一个位置可以到达最后一个元素
  return false
};

let test = [3, 2, 1, 0, 4];
// let test = [0];
console.log(canJump(test));

// @lc code=end

