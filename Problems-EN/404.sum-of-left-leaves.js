/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
let sum = 0;
var sumOfLeftLeaves = function (root) {
  sum = 0; // 每个测试案例之间不互相关联
  if (!root) return 0;
  helper(root);
  return sum;
};

var helper = (root) => {
  if (!root) return;
  // 先遍历右子树 直至右孩子为空
  if (root.right) helper(root.right);
  if (root.left) {
    // 左节点为叶子节点
    if (!root.left.left && !root.left.right) {
      sum += root.left.val;
      return;
    } else {
      // 不是叶子节点则继续递归
      helper(root.left);
    }
  }
}
// @lc code=end

