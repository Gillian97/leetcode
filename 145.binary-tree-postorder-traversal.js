/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
// 二叉树后序遍历
/* 递归法 */
var postorderTraversal = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

var helper = (root, res) => {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
}
// @lc code=end

