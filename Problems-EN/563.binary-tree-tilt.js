/*
 * @lc app=leetcode id=563 lang=javascript
 *
 * [563] Binary Tree Tilt
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
// 后序遍历 需要先知道左子树的和与右子树的和 
// 才能知道根节点的倾斜值并返回整个子树的和
var findTilt = function (root) {
  let res = [0];
  helper(root, res);
  return res[0];
};

var helper = (root, res) => {
  if (!root) return 0;
  let leftSum = helper(root.left, res);
  let rightSum = helper(root.right, res);
  let tilt = Math.abs(leftSum - rightSum);
  res[0] += tilt;
  return root.val + leftSum + rightSum;
}
// @lc code=end

