/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
// 层次遍历
var largestValues = function (root) {
  if (!root) return [];
  let level = [root], res = [];
  helper(level, res);
  return res;
};

var helper = (level, res) => {
  let len = level.length;
  if (len == 0) return;
  // 将最大值初始值设置为每一层第一个节点的值
  let maxVal = level[0].val, node;
  for (let i = 0; i < len; i++) {
    // 弹出头节点
    node = level.shift();
    // 记录每一层的最大值
    maxVal = Math.max(maxVal, node.val);
    // 加入下一层节点
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);
  }
  // 将每一层的最大值加入数组
  res.push(maxVal);
  // 递归进入下一层
  helper(level, res);
}
// @lc code=end

