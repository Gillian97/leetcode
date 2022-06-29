/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return []
  const res = { stack: [], list: [] }
  traverse(root, res)
  return res.list;
};
const traverse = (node, res) => {
  const { stack, list } = res
  if (!node.left && !node.right) {
    stack.push(node.val)
    list.push(stack.join('->'))
    stack.pop()
    return;
  }
  stack.push(node.val)
  node.left && traverse(node.left, res)
  node.right && traverse(node.right, res)
  stack.pop();
}

// @lc code=end

