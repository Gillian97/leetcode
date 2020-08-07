/*
 * @lc app=leetcode id=442 lang=javascript
 *
 * [442] Find All Duplicates in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * 
 * 每一个数都不超过 n,表示如果都不相同的话, 每个数都可以被放在 n-1 的位置上
 * 时间复杂度 O(n),每次不对应的元素都会被放在正确的位置上, 最差的情况是每个元素都不对应
 * 则所有元素都过一遍, 甚至在i=0时就将所有元素都放在对应位置上,则i>0后面都不会走while循环
 * 所以 while 循环最多处理 n 个不对应的元素
 * 空间复杂度 O(1)
 */
var findDuplicates = function (nums) {
  let len = nums.length;
  // res 用数组会存储重复元素
  // 因为某重复元素可能不在自己的位置好几次, 而每次while找到它的时候
  // 它的位置都被占了, 它就被标记了好几次
  let res = new Set();
  for (let i = 0; i < len; i++) {
    while (nums[i] != i + 1) {
      let tarPos = nums[i] - 1;
      let tarVal = nums[tarPos];
      // 说明该值是重复的
      // 将重复值选出并中断循环,跳过该重复值
      if (tarVal == nums[i]) {
        res.add(tarVal);
        break;
      }else {
        nums[tarPos] = nums[i];
        nums[i] = tarVal;
      }
    }
  }
  // 最后的输出结果转变为数组
  return Array.from(res);
};

let test = [4,3,2,7,8,2,3,1];
findDuplicates(test);
// @lc code=end

