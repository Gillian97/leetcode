/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  const res = { sum: 0 }
  traverse(root, res)
  return res.sum
};

// 遍历所有节点 符合条件的累加
const traverse = (node, res) => {
  // 左节点是叶子节点
  if (node.left && !node.left.left && !node.left.right) {
    res.sum += node.left.val;
    // 对于根节点node来说 左节点是叶子节点 但是也不能直接return
    // 因为右节点也可能有左叶子
    // return
  }
  node.left && traverse(node.left, res)
  node.right && traverse(node.right, res)
}
// @lc code=end

