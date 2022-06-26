/*
 * @lc app=leetcode id=669 lang=javascript
 *
 * [669] Trim a Binary Search Tree
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
  return helper(root, low, high);
};

var helper = (root, low, high) => {
  if (!root) return null;
  root.left = helper(root.left, low, high);
  root.right = helper(root.right, low, high);
  // root节点超出范围
  if (root.val < low) {
    return helper(root.right, low, high);
  } else if (root.val > high) {
    return helper(root.left, low, high);
  } else {
    return root;
  }
}
// @lc code=end

