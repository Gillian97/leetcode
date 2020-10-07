/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
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
 * @return {number}
 */
/* 递归 回溯 */
/* 访问所有根节点到叶子节点的路径 */
var sumNumbers = function (root) {
  let path = [];
  helper(root, path, []);
  let sum = 0;
  for (let i in path) {
    // string to number
    sum += Number(path[i]);
  }
  return sum;
};

var helper = (root, path, arr) => {
  // not a path
  if (!root) return;
  // leaf node
  if (!root.left && !root.right) {
    arr.push(root.val);
    // path to string
    path.push(arr.slice().join(''));
    arr.pop();
    return;
  }
  // not leaf node
  arr.push(root.val);
  helper(root.left, path, arr);
  helper(root.right, path, arr);
  arr.pop();
}
// @lc code=end

