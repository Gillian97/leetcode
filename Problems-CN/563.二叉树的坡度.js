/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  const res = { sum: 0 }
  traverse(root, res)
  return res.sum;
};
const traverse = (node, res) => {
  if (!node) {
    return 0;
  }
  const sumLeft = traverse(node.left, res)
  const sumRight = traverse(node.right, res)
  // 后序遍历位置
  const nodeTilt = Math.abs(sumLeft - sumRight)
  res.sum += nodeTilt;
  return sumLeft + sumRight + node.val;
}
// @lc code=end

