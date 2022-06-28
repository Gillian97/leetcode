/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
// 遍历法
var inorderTraversal1 = function (root) {
  const res = []
  traverse(root, res)
  return res;
};

const traverse = (node, res) => {
  if (!node) return
  traverse(node.left, res)
  res.push(node.val)
  traverse(node.right, res)
}

// 解决子问题法(动态规划法)
// 中序遍历的结果是:左子树的中序遍历结果 + 根节点 + 右子树的中序遍历结果
var inorderTraversal = function (root) {
  if (!root) return [];
  const leftArr = inorderTraversal(root.left)
  const rightArr = inorderTraversal(root.right)
  return [...leftArr, root.val, ...rightArr]
};
// @lc code=end

