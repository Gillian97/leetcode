/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
// 将二叉树的左右子树调换位置
var invertTree = function (root) {
  if (!root) return null;
  // 后序遍历的位置 前序遍历也可
  invertTree(root.left);
  invertTree(root.right)
  let left = root.left;
  root.left = root.right;
  root.right = left;
  return root;
};
// @lc code=end

