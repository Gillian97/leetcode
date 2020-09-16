/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) return null
  if (!head.next) return head;
  let hair = new ListNode(null, head);
  let pre = hair;
  let curr = head;
  let pm, pn, tail;

  if (m == 1) {
    pm = head;
  } else {
    // 定位m节点
    // m-1次循环到达pm节点
    for (let i = 0; i < m - 1; i++) {
      curr = curr.next;
      pre = pre.next;
    }
    pm = curr;
  }
  // 定位n节点
  for (let i = 0; i < n - m; i++) {
    curr = curr.next;
  }
  pn = curr;

  tail = curr.next;
  // 翻转
  while (pm != pn) {
    let temp = pm.next;
    pm.next = tail;
    tail = pm;
    pm = temp;
    pre.next = tail;
  }
  // pm==pn时还需要连接下tail
  pm.next = tail;
  // 连接
  pre.next = pm;
  return pre.val ? head : pre.next;
};
// @lc code=end

