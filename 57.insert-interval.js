/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
// intervals 本身是已经排好序的
var insert = function (intervals, newInterval) {
  let left = [], right = [];
  // 逐步比较 将完全不能与当前区间合并的区间分成左右两半部分
  for (let item of intervals) {
    if (item[1] < newInterval[0]) {
      left.push(item);
    }
    if (item[0] > newInterval[1]) {
      right.push(item);
    }
  }
  // 说明剩余有可以合并的区间
  // 剩余的每个区间都是可以和 newInterval 合并的
  // 剩余的所有区间和 newInterval 最后会合并成一个区间
  let ll = left.length, rl = right.length, len = intervals.length;
  let s = newInterval[0], b = newInterval[1];
  if (ll + rl != len) {
    // 可以合并的区间的序号范围是 [ll, len-rl-1]
    // 由于中间的每一个元素均和 newInterval 有交集
    // 则最后会合并成一个区间 找到最后这个合并区间的最大值与最小值(即其范围)
    s = Math.min(intervals[ll][0], s);
    b = Math.max(intervals[len - rl - 1][1], b);
  }
  // 将合并部分的区间置于左右中间
  // 拼接形成结果
  let res = left.concat([[s, b]]).concat(right);
  return res;
}

let A = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], B = [4, 8]
insert(A, B)
// @lc code=end