/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
/* 递归法 */
var binaryTreePaths = function (root) {
  let res = [];
  helper(root, res, []);
  return res;
};

var helper = (root, res, arr) => {
  if (!root) return;
  if (!root.left && !root.right) {
    arr.push(root.val);
    res.push(arr.slice().join('->'));
    arr.pop();
    return;
  }
  arr.push(root.val);
  helper(root.left, res, arr);
  helper(root.right, res, arr);
  arr.pop();
}
// @lc code=end

