/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
/** 迭代法
 * 计算二叉树深度 */
var isBalanced = function (root) {
  if (!root) return true;
  if (Math.abs(helper(root.left) - helper(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};

// 计算某一棵子树的深度
var helper = (root) => {
  if (!root) return 0;
  return 1 + Math.max(helper(root.left), helper(root.right))
}
// @lc code=end

