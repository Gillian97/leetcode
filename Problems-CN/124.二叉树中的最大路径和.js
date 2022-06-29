/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// 用到「分解问题」的思维。
var maxPathSum = function (root) {
  const res = [null]
  oneSideMax(root, res)
  return res[0]
};
// 计算经过node根节点的 单边 最大路径和
// 顺带求个最大路径和
const oneSideMax = (node, res) => {
  if (!node) {
    return 0;
  }
  // 路径终点可以不是叶子节点
  // 负数的除外
  const leftMax = Math.max(0, oneSideMax(node.left, res))
  const rightMax = Math.max(0, oneSideMax(node.right, res))
  // 计算经过node根节点的最大路径和
  const pathSum = leftMax + node.val + rightMax
  res[0] = Math.max(pathSum, res[0] || pathSum)
  // 左右子树比较 谁大返回谁
  return Math.max(leftMax, rightMax) + node.val
}
// @lc code=end

