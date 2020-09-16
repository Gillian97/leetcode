/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 题目要求是深拷贝
// 就是不改变原有的链表
// 第一遍是copy all nodes, 使用map存储
// 第二遍是copy links
var copyRandomList = function (head) {
  if (!head) return null;
  // copy nodes
  let curr = head;
  let map = new Map(); // map的key可以是任何对象, 不限于字符串
  while (curr) {
    map.set(curr, new Node(curr.val));
    curr = curr.next;
  }
  // copy links
  curr = head;
  let node = map.get(curr);
  while (curr) {
    node.next = curr.next ? map.get(curr.next) : null;
    node.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
    node = node.next;
  }
  return map.get(head);
};
// @lc code=end