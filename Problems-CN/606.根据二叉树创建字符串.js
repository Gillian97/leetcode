/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
var tree2str = function (root) {
  return traverse(root)
};

function traverse (node) {
  if (!node) {
    return '()';
  }
  let leftStr = traverse(node.left)
  let rightStr = traverse(node.right)
  if (rightStr === '()') {
    rightStr = ''
    leftStr = leftStr === '()' ? '' : `(${leftStr})`
  } else {
    rightStr = `(${rightStr})`
    leftStr = `(${leftStr === '()' ? '' : leftStr})`
  }
  return `${node.val}${leftStr}${rightStr}`
}
// @lc code=end

