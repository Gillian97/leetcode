/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 三种方法 常数空间
/* 1. 利用 js 数组的特性 */

var rotate1 = function (nums, k) {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop());
  }
};

// 算出从后往前需要移动多少元素
var rotate2 = (nums, k) => {
  let n = nums.length;
  let m = k % n;
  let part = nums.slice(n - m);
  nums.splice(n - m, m);
  nums.unshift(...part);
}

/* 2. 暴力法 不使用数组的api */

// 时间复杂度 每个元素被移动一步 一共被移动k次 O(N*K)
// 空间复杂度 O(1)
var rotate3 = (nums, k) => {
  let n = nums.length;
  // 一共进行k次移动操作
  // let times = k;
  let times = k % n; // 优化次数 k -> k % n
  for (let i = 0; i < times; i++) {
    let pre = nums[n - 1];
    for (let j = 0; j < n; j++) {
      let temp = nums[j];
      nums[j] = pre;
      pre = temp;
    }
  }
}


// @lc code=end

