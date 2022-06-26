/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
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
// 为每个节点添加指向自己右边节点的指针
// 根节点需要做的事情是 将左右节点串起来
var connect = function (root) {
  if (!root) return null;
  connectNodes(root.left, root.right);
  return root;
};

var connectNodes = (node1, node2) => {
  if (!node1 || !node2) {
    return;
  }
  // 前序遍历的位置
  node1.next = node2;
  connectNodes(node1.left, node1.right)
  connectNodes(node2.left, node2.right)
  connectNodes(node1.right, node2.left)
}
// @lc code=end

