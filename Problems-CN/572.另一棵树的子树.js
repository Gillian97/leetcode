/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!subRoot) return true;
  return traverse(root, subRoot)
};
const traverse = (node, subRoot) => {
  if (!node) {
    return false;
  }
  return traverse(node.left, subRoot) || traverse(node.right, subRoot) || isSame(node, subRoot)
}

const isSame = (node1, node2) => {
  if (!node1 && !node2) return true;
  if (!node1 && node2 || node1 && !node2) return false
  if (node1.val !== node2.val) return false
  return isSame(node1.left, node2.left) && isSame(node1.right, node2.right)
}
// @lc code=end

