/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
 */

const { rootCertificates } = require("tls");

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
// 根节点需要做什么? 对于构造二叉树而言, 根节点要做的事情就是想办法把自己构造出来
// 找到最大值作为根节点
// 再将数组的左右部分递归调用 作为root的左右子树
var constructMaximumBinaryTree = function (nums) {
  return build(nums, 0, nums.length - 1);
};

var build = function (nums, lo, hi) {
  if (lo > hi) return null;
  // 找到数组中的最大值构造根节点
  // 注意这里的max初始值设置为<0的数
  // 若等于0, 则需要修改判断条件为 maxVal <= nums[i]
  let maxVal = -1, index = -1;
  for (let i = lo; i <= hi; i++) {
    if (maxVal < nums[i]) {
      maxVal = nums[i];
      index = i; // 记录最大值的下标
    }
  }
  // 前序遍历的位置
  let root = new TreeNode(maxVal);
  // 需要知道构造数组的范围
  root.left = build(nums, lo, index - 1);
  root.right = build(nums, index + 1, hi);
  return root;
}
// @lc code=end

