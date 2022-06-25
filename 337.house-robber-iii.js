/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
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
// 难道不是层次遍历吗...
// 提示是 深度优先搜索
// 奇数层相加 偶数层相加
var rob = function (root) {
  if (!root) return 0;
  let sum = [];
  dfs(root, sum, 1);
  return Math.max(...sum);
};

var dfs = (root, sum, depth) => {
  if (!root) return;
  if (sum.length < depth) {
    sum.push(root.val);
  } else {
    sum[depth - 1] += root.val;
  }
  for (let i = 0; i <= depth - 3; i++) {
    sum[i] += root.val;
  }
  // sum[depth % 2] += root.val;
  dfs(root.left, sum, depth + 1);
  dfs(root.right, sum, depth + 1);
};


// @lc code=end

