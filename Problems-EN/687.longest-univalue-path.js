/*
 * @lc app=leetcode id=687 lang=javascript
 *
 * [687] Longest Univalue Path
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
let res; // 记录最长路径值
var longestUnivaluePath = function (root) {
  res = 0;
  helper(root);
  return res;
};

var helper = (root) => {
  if (!root) return 0;
  // 后续遍历框架 先计算子树 返回子树的高度
  let left = helper(root.left);
  let right = helper(root.right);
  let leftPath = 0, rightPath = 0;
  // 只有子节点的值与根节点相等 它返回的高度对我才有计算用途
  // 否则 我只是一个孤零零的根节点
  if (root.left && root.left.val == root.val) {
    leftPath = left + 1;
  }
  if (root.right && root.right.val == root.val) {
    rightPath = right + 1;
  }
  // 每一个根节点形成的路径长都会被拿去更新最大值
  res = Math.max(res, leftPath + rightPath);
  // 由于根节点有两条分叉(左右) 如果根节点是组成最长路径的某个节点
  // 那么经过该根节点的路径一定是走向该根节点较长的那条子路径
  // 所以需要返回左右两条路径的较大值
  return Math.max(leftPath, rightPath);
}
// @lc code=end

