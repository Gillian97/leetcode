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
  // 特殊情况
  if (!head) return null
  if (!head.next) return head;
  // 当链表长度足够翻转时, 在head前添加hair节点
  // 为了使用pre节点, pre是pm的前一个节点
  let hair = new ListNode(null, head);
  let pre = hair, curr = head;
  // 定义变量 注意需要tail指针
  let pm, pn, tail;

  // 定位m节点
  if (m == 1) {
    pm = head; // pm直接是头节点
  } else {
    // m-1次循环到达pm节点
    for (let i = 0; i < m - 1; i++) {
      // pre节点也需要同时向后移动
      // 保证在pm前一位
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
  // 翻转前保留尾部数据
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
  return hair.next;
};
// @lc code=end

