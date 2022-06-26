/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
/* 递归法 */
// 层次遍历 返回每一层最右侧的节点 
var rightSideView = function (root) {
  if (!root) return [];
  let level = [root], res = [];
  while (level.length > 0) {
    let len = level.length;
    res.push(level[len - 1].val);
    for (let i = 0; i < len; i++) {
      if (level[0].left) level.push(level[0].left);
      if (level[0].right) level.push(level[0].right);
      level.shift(); // 不断移除数组的第一个元素
    }
  }
  return res;
};
// @lc code=end

