/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  console.log(root.children);
  let level = [root], res = [];
  helper(level, res);
  return res;
};

var helper = (level, res) => {
  let n = level.length, node, arr = [];
  if (n == 0) return;
  for (let i = 0; i < n; i++) {
    node = level.shift();
    // 将该层节点的值放入数组
    arr.push(node.val);
    // 每个节点的孩子以数组形式存储
    let children = node.children;
    if (children.length != 0) {
      for (let j = 0; j < children.length; j++) {
        level.push(children[j]);
      }
    }
  }
  res.push(arr);
  helper(level, res);
}
// @lc code=end

