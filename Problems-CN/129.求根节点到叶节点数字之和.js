/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
// 遍历树
// 回溯算法 
var sumNumbers = function (root) {
  if (!root) return 0;
  const res = { sum: 0, numList: [] }
  traverse(root, res)
  return res.sum;
};
const traverse = (node, res) => {
  if (!node.left && !node.right) {
    // 叶子节点
    res.numList.push(node.val)
    res.sum += (+res.numList.join(''))
    res.numList.pop()
    return;
  }
  // res.numList 需保持与传入一致,不影响下一次的数字记录
  res.numList.push(node.val)
  node.left && traverse(node.left, res)
  node.right && traverse(node.right, res)
  res.numList.pop()
}

// @lc code=end

