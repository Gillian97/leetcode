/*
 * @lc app=leetcode id=77 lang=javascript
 *
 * [77] Combinations
 */

// @lc code=start
/**
 * 全排列的另一种形式, 除去长度不合适的组合
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine1 = function (n, k) {
  let arr = [];
  // 初始化数组
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // 目标:找到长度为k的子集
  // 约束:长度为k即停止
  // 选择:每次选择当前元素的下一个元素
  // 如何定义dfs start depth
  let res = [], curr = [], start = 0, depth = 0;
  dfs(arr, depth, k, res, curr, start, n);
  return res;
};

var dfs = (arr, depth, k, res, curr, start, n) => {
  if (depth === k) {
    res.push(curr.slice());
    return;
  }
  for (let i = start; i < n; i++) {
    curr.push(arr[i]);
    dfs(arr, depth + 1, k, res, curr, i + 1, n);
    curr.pop();
  }
}

// 2020-10-20 使用回溯模板
var combine = (n, k) => {
  let path = [], res = [];
  let choice = [];
  for (let i = 1; i <= n; i++) {
    choice.push(i);
  }
  helper(choice, 0, path, res, k);
  return res;
}

var helper = (choice, start, path, res, k) => {
  if (path.length == k) {
    res.push(path.slice());
    return;
  }
  for (let i = start; i < choice.length; i++) {
    path.push(choice[i]);
    helper(choice, i + 1, path, res, k);
    path.pop();
  }
}

let x = 4, y = 2;
combine(x, y);
// @lc code=end

