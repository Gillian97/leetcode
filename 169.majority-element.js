/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 确定次数
  let times = Math.floor(nums.length / 2);
  let map = {};
  for (let i of nums) {
    if (i in map) {
      map[i] += 1;
    } else {
      map[i] = 1;
    }
    // 每个值的出现次数更新之后, 都会判断一下是否是主要元素
    // 由于题目说主要元素一定存在, 因此一定会存在元素的出现次数超过规定值
    if (map[i] > times) return i;
  }
};

let test = [3, 2, 1, 1, 1, 2, 2]
majorityElement(test)
// @lc code=end

