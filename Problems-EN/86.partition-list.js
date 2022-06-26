/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 * 遍历一遍链表
 * 所有小于x的node形成一个链表
 * 所有大于x的node形成一个链表
 * 再把两个链表进行拼接即可
 */
var partition = function (head, x) {
  let smaller = new ListNode(null);
  let s = smaller;
  let bigger = new ListNode(null);
  let b = bigger;
  let curr = head;
  while (curr) {
    if (curr.val < x) {
      s.next = new ListNode(curr.val);
      s = s.next;
    } else {
      b.next = new ListNode(curr.val);
      b = b.next;
    }
    curr = curr.next;
  }
  s.next = bigger.next;
  return smaller.next;
};
// @lc code=end

