/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
// 前序遍历
/* 递归法 */
var preorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res
};

var helper = (root, res) => {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
}
// @lc code=end

