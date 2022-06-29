/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
// BFS
var rightSideView = function (root) {
  if (!root) return []
  const queue = [root]
  const sideList = []
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (i === n - 1) {
        sideList.push(cur.val)
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return sideList;
};
// @lc code=end

