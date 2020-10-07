/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
/* 递归法 */
// 根节点到达每个叶子节点的路径上的每一个和均需要记录
let count = 0;
var pathSum = function (root, sum) {
  count = 0; // 每个测试案例之间不能互相影响
  if (!root) return 0;
  helper(root, sum, [[]]);
  return count;
};

var helper = (root, sum, arr) => {
  // if (!root) return;
  /* 计数到达当前节点的所有节点的和==sum的个数 */
  // 每到一个节点都计算 到该节点路径上的所有和
  let n = arr.length;
  let temp = [];
  // 将上一个节点的所有和均加上root.val添加进数组
  // 同时看是否有与目标值相等的
  for (let i = 0; i < arr[n - 1].length; i++) {
    let newVal = arr[n - 1][i] + root.val;
    if (newVal == sum) count++;
    temp.push(newVal);
  }
  if (root.val == sum) count++;
  // 将当前节点的值也添加进去
  temp.push(root.val);
  // 添加记录到达当前节点路径的所有和的数组
  arr.push(temp);

  // 计算到达左右节点的路径上的和==sum的个数
  if (root.left) helper(root.left, sum, arr);
  if (root.right) helper(root.right, sum, arr);
  // 回溯 将当前节点的和的数组弹出
  arr.pop();
}
// @lc code=end

