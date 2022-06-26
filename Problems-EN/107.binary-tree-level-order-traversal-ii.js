/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
// 思略是将层序遍历的结果用链表存储下来或者将结果数组颠倒一下
/* 递归法 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let res = [];
  helper([root], res);
  // 借用了js数组的特性 颠倒数组
  return res.reverse();
};

// 二叉树层序遍历
var helper = (nodes, res) => {
  if (nodes.length == 0) return null;
  let arr = [], nextNodes = [];
  for (let i in nodes) {
    arr.push(nodes[i].val);
    if (nodes[i].left) nextNodes.push(nodes[i].left);
    if (nodes[i].right) nextNodes.push(nodes[i].right);
  }
  res.push(arr);
  helper(nextNodes, res);
}
// @lc code=end

