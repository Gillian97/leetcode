/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
// 解决这题的关键在于，每一条二叉树的「直径」长度，就是一个节点的左右子树的最大深度之和。
// 现在让我求整棵树中的最长「直径」，那直截了当的思路就是遍历整棵树中的每个节点
// 然后通过每个节点的左右子树的最大深度算出每个节点的「直径」，最后把所有「直径」求个最大值即可。
// 子问题(子树)
// 时间复杂度 O(N^2)
var diameterOfBinaryTree1 = function (root) {
  if (!root) return 0;
  const res = [null]
  traverse(root, res)
  return res[0];
};

const traverse = (node, res) => {
  if (!node) return;
  const curDia = maxDepth(node.left) + maxDepth(node.right)
  if (res[0] === null) res[0] = curDia
  res[0] = Math.max(res[0], curDia)
  traverse(node.left, res)
  traverse(node.right, res)
}

// maxdepth 本身也在进行遍历
const maxDepth = (node) => {
  if (!node) return 0;
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1
}





/** 将计算直径放在后序遍历的位置上 */
// 时间复杂度 O(N)
var diameterOfBinaryTree = function (root) {
  const res = [null]
  maxDepthOpt(root, res)
  return res[0]
}

const maxDepthOpt = (node, res) => {
  if (!node) return 0;
  const leftDepth = maxDepthOpt(node.left, res)
  const rightDepth = maxDepthOpt(node.right, res)
  // 拿到左右子树的深度, 计算该树的直径
  const curDia = leftDepth + rightDepth
  res[0] = Math.max(res[0] || curDia, curDia)
  return Math.max(leftDepth, rightDepth) + 1
}
// @lc code=end

