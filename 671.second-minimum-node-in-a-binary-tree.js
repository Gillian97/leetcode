/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
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
// 根节点的值是最小的
var findSecondMinimumValue = function (root) {
  let secondVal = [-1]; // 不记录根节点(最小值)
  helper(root, secondVal);
  return secondVal[0];
};

var helper = (root, secondVal) => {
  if (!root.left) return;
  // 出现都相等的情况 一定该值是所有节点中的最小值 较大值即使出现相等情况也不会递归到
  // 说明该节点值是最小的
  if (root.val == root.right.val && root.val == root.left.val) {
    helper(root.left, secondVal);
    helper(root.right, secondVal);
    // 找到大于根节点的值 才记录下来 并做更新
    // 同时还要看与根节点值相同的节点 其左右节点有没有更小的比最小值大的节点
  } else if (root.val < root.right.val) {
    secondVal[0] = (secondVal[0] == -1) ? root.right.val : Math.min(root.right.val, secondVal[0])
    helper(root.left, secondVal);
  } else if (root.val < root.left.val) {
    secondVal[0] = (secondVal[0] == -1) ? root.left.val : Math.min(root.left.val, secondVal[0])
    helper(root.right, secondVal);
  }
}
// @lc code=end

