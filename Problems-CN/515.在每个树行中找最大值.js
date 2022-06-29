/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length > 0) {
    const n = queue.length
    let levelMax = null;
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (levelMax === null) {
        levelMax = cur.val
      }
      levelMax = Math.max(levelMax, cur.val)
      if (i === n - 1) {
        res.push(levelMax)
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    levelMax = null;
  }
  return res;
};
// @lc code=end

