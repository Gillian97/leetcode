/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

const { get } = require("http");

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
// solution 1: 快慢指针法
// 快慢指针找循环
// 在平方累加的过程中, 要不最后等于1, 要不最后陷入循环, 至于为什么不是无穷大
// 需要再琢磨一下
var isHappy1 = function (n) {
  // 慢指针一次计算一步, 快指针一次计算两步
  // 如果两个指针的值一样, 说明进入循环
  // 否则, 快指针一定比慢指针率先到达1
  // 初始化快慢指针
  let slow = getPow(n), fast = getPow(getPow(n));
  while (fast != 1 && fast != slow) {
    slow = getPow(slow);
    fast = getPow(fast);
    fast = getPow(fast);
  }
  return fast == 1 ? true : false;
};

// 计算某个数的各个数位上的平方
var getPow = (n) => {
  let sum = 0;
  while (n > 0) {
    let num = n % 10;
    sum += num * num;
    n = Math.floor(n / 10);
  }
  return sum;
}

// solution 2: 使用hashmap来判断值有无重复 聪儿判断有无循环
var isHappy = function (n) {
  let map = {};
  let res = getPow(n);
  // map中没有该计算结果
  // 则添加进map中
  // 不是undefined 说明该计算结果之前已经被塞进map中
  // 得到循环
  while (map[res] == undefined && res != 1) {
    map[res] = '1';
    res = getPow(res);
  }
  return res == 1 ? true : false;
}

// @lc code=end

