/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 116 是完美二叉树 这个不是完美二叉树
// 使用层次遍历
var connect = function (root) {
  if (!root) return null;
  helper([root]);
  return root;
};

var helper = (nodes) => {
  let n = nodes.length;
  // 数组为空 没有再需要连接的节点
  if (n == 0) return null;
  // 将前n个节点一一指向后者
  // i 标记进行多少次这样的操作
  for (let i = 0; i < n; i++) {
    let node = nodes.shift();
    // 最后一层的节点不需要再指向后面的节点
    if (i < n - 1 && nodes[0]) {
      node.next = nodes[0];
    }
    // 将该层节点的下一层节点均添加进数组中
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  helper(nodes);
}
// @lc code=end

