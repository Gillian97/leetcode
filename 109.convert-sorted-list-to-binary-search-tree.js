/*
 * @lc app=leetcode id=109 lang=javascript
 *
 * [109] Convert Sorted List to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 大体思路是: 先使用快慢指针, 找到链表的中心点
// 然后再分别从头和中间进行向后遍历, 形成高度平衡二叉树, 重点在于高度平衡
var sortedListToBST = function (head) {
  if (!head) return null;
  let midNode = findRoot(head);
  let root = new TreeNode(midNode.val);
  // 当链表中只剩一个节点 则直接返回该节点对应的根节点
  if (head == midNode) {
    return root;
  }
  root.left = sortedListToBST(head);
  root.right = sortedListToBST(midNode.next);
  return root;
};

// slow是中心点mid
var findRoot = (head) => {
  let slow = head, fast = head, pre = null;
  while (fast && fast.next) {
    pre = slow; // 记录slow的前一个节点
    slow = slow.next;
    fast = fast.next.next;
  }
  // 中间节点的左半段 应该与中间节点分开
  if (pre != null) {
    pre.next = null;
  }
  return slow;
}
// @lc code=end

