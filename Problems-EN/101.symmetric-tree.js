/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
/* 递归法 */
var isSymmetric = function (root) {
  // 根节点需要做的事
  if (!root) return true;
  return helper(root.left, root.right);
};

var helper = (node1, node2) => {
  // 两个都不存在是相等的 true
  if (!node1 && !node2) return true;
  // 一个存在一个不存在 或者 两节点值不相等 false
  if (!node1 && node2 || node1 && !node2 || node1.val != node2.val) return false;
  return helper(node1.left, node2.right) && helper(node1.right, node2.left);
}
// @lc code=end

