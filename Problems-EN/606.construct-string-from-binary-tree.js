/*
 * @lc app=leetcode id=606 lang=javascript
 *
 * [606] Construct String from Binary Tree
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
 * @param {TreeNode} t
 * @return {string}
 */
// 前序遍历 生成字符串
// 
var tree2str = function (t) {
  if (!t) return "";
  let res = [];
  helper(t, res);
  // 移除首尾的括号
  res.pop();
  res.shift();
  return res.join('');
};

var helper = (t, res) => {
  // 前序遍历节点
  res.push("(");
  res.push(t.val);
  if (t.left) helper(t.left, res);
  // 左节点为空 右节点不为空的情况 需要记录左节点
  if (!t.left && t.right) {
    res.push("()");
  }
  if (t.right) helper(t.right, res);
  res.push(")");
}
// @lc code=end

