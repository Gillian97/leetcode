/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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
// 每一棵子树的左子树的高度与右子树的高度相加
// find max
// 计算树的高度
var diameterOfBinaryTree = function (root) {
  let maxHeight = [0];
  getHeight(root, maxHeight);
  return maxHeight[0];
};

// 这里计算的高度实际上是计算的代表高度的路径上的节点数
var getHeight = (root, maxHeight) => {
  // 后序遍历 计算每一个根节点的
  if (!root) return 0;
  let leftHeight = getHeight(root.left, maxHeight);
  let rightHeight = getHeight(root.right, maxHeight);
  // 计算该根节点的子树的直径并更新最大值
  // 子树直径为这里的 左子树高度＋右子树高度
  maxHeight[0] = Math.max(maxHeight[0], leftHeight + rightHeight);
  // 返回该子树的高度
  // 子树的高度是 算上根节点+左右子树高度的较大值
  return 1 + Math.max(leftHeight, rightHeight);
}
// @lc code=end

