/*
 * @lc app=leetcode id=513 lang=javascript
 *
 * [513] Find Bottom Left Tree Value
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
// 层次遍历
var findBottomLeftValue = function (root) {
  let level = [root];
  return helper(level, 0);
};

var helper = (level, lastLevelHead) => {
  let len = level.length;
  // 当该层没有节点时 递归结束 返回上一层的第一个结点值
  if (len == 0) return lastLevelHead;
  let node, firstNode = level[0].val; // 记录该层的第一个节点值
  for (let i = 0; i < len; i++) {
    node = level.shift();
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);
  }
  // 将当前层第一个节点值带入对下一层的处理
  return helper(level, firstNode)
}
// @lc code=end

