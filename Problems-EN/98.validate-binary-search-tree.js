/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
/* 递归法 */
var isValidBST = function (root) {
  return helper(root, null, null);
};

// 使用辅助函数 帮助保存每棵子树不能超过的最大值 不能小于的最小值
var helper = (root, max, min) => {
  if (!root) return true;
  // 二叉搜索树的要求是严格大于左子树 严格小于右子树
  // 所以等于也是不符合条件的
  if (max && root.val >= max.val) return false;
  if (min && root.val <= min.val) return false;
  return helper(root.left, root, min) && helper(root.right, max, root)
}
// @lc code=end

