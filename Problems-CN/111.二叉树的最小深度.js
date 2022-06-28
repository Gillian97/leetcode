/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 解决子问题(子树)
var minDepth1 = function (root) {
  if (!root) return 0;
  const a = minDepth(root.left)
  const b = minDepth(root.right)
  if (a !== 0 && b !== 0) {
    return Math.min(a, b) + 1
  } else {
    return Math.max(a, b) + 1
  }
};

// 遍历(有前中后+层次)
// 所有深度找最小
var minDepth = function (root) {
  if (!root) return 0;
  const minD = [-1]
  traverse(root, 1, minD)
  return minD[0];
};
const traverse = (node, depth, minD) => {
  if (!node.left && !node.right) {
    // leaf node
    // 该叶子节点所在路径的深度
    if (minD[0] === -1) {
      minD[0] = depth;
    }
    if (depth < minD[0]) {
      minD[0] = depth;
    }
    return depth;
  }
  node.left && traverse(node.left, depth + 1, minD)
  node.right && traverse(node.right, depth + 1, minD)
}

// 层次遍历(BFS)
// 找到第一个叶子节点即返回深度,不用再接着找了
var minDepth2 = function (root) {
  if (!root) return 0;
  const queue = [];
  queue.push(root)
  let depth = 1;
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      // 遍历该层节点 看是否到终点
      if (!cur.left && !cur.right) {
        return depth;
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    // 同一深度的节点遍历完 深度+1
    depth++;
  }
  // return depth
}
// @lc code=end

