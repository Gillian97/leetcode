/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * 时间复杂度 O(n) 单重循环遍历整个数组2次
 * 空间复杂度 O(1) 没有占用多余空间,只是交换元素时新增了临时变量
 * 
 * my solution
 */
var sortColors = function (nums) {
  let len = nums.length;
  // 0 放开始 2 放最后
  // t 始终标记不是目标元素的第一个位置
  // t 位置是目标元素,t++
  // t 位置不是目标元素,与目标元素替换后, t++
  let t = 0;
  // 将0置于数组前面位置
  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      if (nums[t] != 0) {
        exchange(t, i, nums);
      }
      // 只要碰见0,t++,也相当于统计了0的个数
      // 同时++也标记了再有元素0,它应该放置的最新位置 t
      t++;
    }
  }
  // 将1置于数组中间位置
  for (let i = t; i < len; i++) {
    if (nums[i] == 1) {
      if (nums[t] != 1) {
        exchange(t, i, nums);
      }
      t++;
    }
  }
  // 一共只有三种元素类型, 前两种排好之后, 最后一种自动归位
};

// 这个同时移动的逻辑 还没有搞清楚 答案不对 先搁置吧
/*var sortColors = function (nums) {
  let len = nums.length;
  let t1 = 0, t2 = len - 1;
  // 将0置于数组前面位置 2置于数组后面位置
  for (let i = 0; i < t2; i++) {
    if (nums[i] == 0) {
      console.log('i=', i, 't1=', t1);
      if (nums[t1] != 0) {
        exchange(t1, i, nums);
      }
      // 只要碰见0,t++,也相当于统计了0的个数
      // 同时++也标记了再有元素0,它应该放置的最新位置 t
      console.log('*', nums);

      t1++;
    }

    if (nums[i] == 2) {
      console.log('i=', i, 't2=', t2);
      // console.log('*', nums);
      if (nums[t2] != 2) {
        exchange(t2, i, nums);
      }
      // 只要碰见0,t++,也相当于统计了0的个数
      // 同时++也标记了再有元素0,它应该放置的最新位置 t
      console.log('*', nums);
      t2--;
    }
  }
  console.log(nums);
};*/

var exchange = (i, j, nums) => {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

let test = [0, 0, 1, 1, 0, 2, 0];
sortColors(test)
// @lc code=end

