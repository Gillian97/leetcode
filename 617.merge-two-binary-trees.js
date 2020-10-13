/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  // 对应位置的两个节点均为空 则返回空
  if (!t1 && !t2) return null;
  // 初始化新节点
  let root = new TreeNode(null);
  if (t1 && t2) { // 两个节点均存在
    root.val = t1.val + t2.val;
    root.left = mergeTrees(t1.left, t2.left);
    root.right = mergeTrees(t1.right, t2.right);
  } else { // 一个节点存在 一个不存在
    root.val = t1 ? t1.val : t2.val;
    root.left = t1 ? t1.left : t2.left;
    root.right = t1 ? t1.right : t2.right;
  }
  return root;
};
// @lc code=end

