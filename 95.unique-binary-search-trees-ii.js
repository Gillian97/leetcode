/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
/* 递归法 */
// 构造二叉树BST
var generateTrees = function (n) {
  if (n == 0) return [];
  return helper(1, n);
};

var helper = (low, high) => {
  let arr = [];
  if (high < low) {
    // 这种情况是左右子树有一边为空
    // 需要将null加入
    arr.push(null);
    return arr;
  }
  for (let i = low; i <= high; i++) {
    // 每个节点均做根节点
    // 先计算左右子树各自的组合
    let leftTrees = helper(low, i - 1);
    let rightTrees = helper(i + 1, high);
    // 将左右子树两两组合
    for (let l = 0; l < leftTrees.length; l++) {
      for (let r = 0; r < rightTrees.length; r++) {
        let root = new TreeNode(i);
        root.left = leftTrees[l];
        root.right = rightTrees[r];
        arr.push(root);
      }
    }
  }
  return arr;
}
// @lc code=end

