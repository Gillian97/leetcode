/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 构造树的题目
// 有序数组转为二叉平衡树
// 左右子树高度差不能超过1
// 有序数组从中间开始即可
/* 递归法 */
var sortedArrayToBST = function (nums) {
  return helper(nums, 0, nums.length - 1);
};

var helper = (nums, start, end) => {
  // 递归出口
  if (start > end) return null;
  // 确定根节点
  let index = start + Math.floor((end - start) / 2);
  let rootVal = nums[index];
  let root = new TreeNode(rootVal);
  // 确定左右子树 
  root.left = helper(nums, start, index - 1);
  root.right = helper(nums, index + 1, end);
  return root;
}
// @lc code=end

