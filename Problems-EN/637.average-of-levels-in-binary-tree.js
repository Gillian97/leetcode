/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
// 二叉树的层次遍历
// 每一层只计算存在的节点
var averageOfLevels = function (root) {
  if (!root) return [0];
  let level = [root], res = [];
  helper(level, res);
  return res;
};

var helper = (level, res) => {
  let len = level.length;
  // 该层没有节点则递归结束
  if (len == 0) return;
  let sum = 0, node;
  for (let i = 0; i < len; i++) {
    // 移出头节点
    node = level.shift();
    // 累加该层节点的值
    sum += node.val;
    // 将下一层非空的节点加入
    if (node.left) level.push(node.left);
    if (node.right) level.push(node.right);
  }
  // 计算该层的平均数
  res.push(sum / len);
  // 继续计算下一层的平均数
  helper(level, res);
}
// @lc code=end

