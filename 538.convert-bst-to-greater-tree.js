/*
 * @lc app=leetcode id=538 lang=javascript
 *
 * [538] Convert BST to Greater Tree
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
 * @return {TreeNode}
 */
// 需要一种新的遍历顺序 右根左
var convertBST = function (root) {
  if (!root) return null;
  traverse(root, 0);
  return root;
};

var traverse = (root, addNum) => {
  // 叶子节点
  if (!root.left && !root.right) {
    root.val += addNum;
    return root.val;
  }
  if (root.right) {
    // 给整个子树传进来的值 只作用在最右侧的节点上
    root.val += traverse(root.right, addNum);
  } else {
    root.val += addNum;
  }
  // 如果有左子树 则左子树返回的值是当前子树的最大值
  // 递归调用计算左子树的最大值时 需要将当前子树的根节点的值传入
  // 用于左子树的最右侧节点相加
  return root.left ? traverse(root.left, root.val) : root.val;
}
// @lc code=end

