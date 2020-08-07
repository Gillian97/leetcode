/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 时间复杂度 O(n) 空间复杂度 O(1)
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;
  let res = new Array();
  // 由于1 ≤ a[i] ≤ n (n = size of array)
  // 则每个元素都能在数组里找到自己应该在的位置(i-1)
  // 将数组元素都放在正确位置上
  // 处理完毕的结果应该是
  // 只有重复的元素不在自己位置上
  for (let i = 0; i < len; i++) {
    while (nums[i] != i + 1) {
      let tarPos = nums[i] - 1;
      let tarVal = nums[tarPos];
      // 说明该值已经在正确位置上,这里是重复的
      // 中断循环,跳过该重复值
      if (tarVal == nums[i]) {
        break;
      } else {
        nums[tarPos] = nums[i];
        nums[i] = tarVal;
      }
    }
  }
  // 位置没有对应上的都是未出现的元素
  // 且位置都是被重复元素占用了
  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) {
      res.push(i + 1);
    }
  }
  // 最后的输出结果转变为数组
  return res;
};

let test = [4,3,2,7,8,2,3,1]
findDisappearedNumbers(test);
// @lc code=end

