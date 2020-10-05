/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
/* 递归法 */
// 主要是需要进行高度之间的比较
// 不要共用一个高度值 要直接返回数字 进行数字之间的相加
// 与数二叉树的节点类似
var maxDepth = function (root) {
  // 传入一个数字 而不是一个初始值为 0 的变量
  return helper(root, 0);
};

var helper = (root, depth) => {
  // 根节点为空 直接返回上一层高度即可
  if (!root) return depth;
  if (!root.left && !root.right) { // 叶子节点
    return depth + 1;
  } else {
    // 有左右子树的 高度是左右子树中的较大值
    return Math.max(helper(root.left, depth + 1), helper(root.right, depth + 1));
  }
}
// @lc code=end

