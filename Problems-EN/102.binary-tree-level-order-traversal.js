/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
// 二叉树层次遍历
/* 递归法 */
var levelOrder = function (root) {
  if (!root) return [];
  let res = [];
  helper([root], res);
  return res;
};

// 把所有列表中的节点均添加进arr中
var helper = (nodes, res) => {
  // 递归出口 当前层级没有节点时 说明上一层已经是最后一层 递归结束
  if (nodes.length == 0) return null;
  let arr = [], nextNodes = [];
  for (let i in nodes) {
    arr.push(nodes[i].val);
    // 将该层级的节点的左右节点均加入进列表中
    if (nodes[i].left) nextNodes.push(nodes[i].left);
    if (nodes[i].right) nextNodes.push(nodes[i].right);
  }
  // 将当前层级的节点的值列表添加进结果数组
  res.push(arr);
  helper(nextNodes, res);
}
// @lc code=end

