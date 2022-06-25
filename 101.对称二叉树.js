/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 递归
var isSymmetric = function (root) {
  if (!root) { 
    return true;
  }
  return isEqual(root.left, root.right);
};

var isEqual = function (node1, node2) {
  return ((node1 && node2 && node1.val === node2.val && isEqual(node1.right, node2.left) && isEqual(node1.left, node2.right)) || (!node1 && !node2));
}
// @lc code=end

