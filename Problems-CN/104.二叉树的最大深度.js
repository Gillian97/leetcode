/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
// 遍历法
// 首先明确信息,想要得到最大深度,必须遍历整棵树才能知道
var maxDepth1 = function (root) {
  let depth = 1;
  return traverse(root, depth)
};
// 返回子树最大深度
const traverse = (node, d) => {
  if (!node) return d - 1;
  return Math.max(traverse(node.left, d + 1), traverse(node.right, d + 1))
}

// 层次遍历 略

// 解决子问题法
// 找到子树的最大深度 = 左右子树深度较大者 + 1
var maxDepth = function (root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
// @lc code=end

