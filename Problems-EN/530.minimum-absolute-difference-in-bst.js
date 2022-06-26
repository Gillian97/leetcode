/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
// 找到某棵子树的根节点与左侧最大节点/右侧最小节点之间的差值
// 中序遍历得到有序数组 计算数组元素间差值的最小值
var getMinimumDifference = function (root) {
  let res = [];
  inorder(root, res);
  let minVal = res[1] - res[0];
  for (let i = 2; i < res.length; i++) {
    minVal = Math.min(minVal, res[i] - res[i - 1]);
  }
  return minVal;
};

var inorder = (root, res) => {
  if (!root) return null;
  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}


// @lc code=end

