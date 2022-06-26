/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 先将左子树拉直 再将右子树拉直
// 最后将右子树接在左子树上 将左子树变为右子树
// 这就是root需要做的事
var flatten = function (root) {
  if (!root) return;
  // 将左右子树拉平
  flatten(root.left);
  flatten(root.right);
  // 后序遍历位置
  // 将左右子树调换位置 左子树变右子树
  let left = root.left, right = root.right;
  root.left = null;
  root.right = left;
  // 将原来的右子树加在现在右子树的最右边 形成链表
  let p = root;
  while (p.right) {
    p = p.right;
  }
  p.right = right;
};
// @lc code=end

