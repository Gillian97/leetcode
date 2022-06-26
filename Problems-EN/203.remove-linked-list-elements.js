/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return null;
  let hair = new ListNode(null, head);
  let pre = hair, curr = head;
  // pre的移动也是在head表示的这条链表上
  // pre改变的是head本身
  while (curr) {
    if (curr.val == val) {
      pre.next = curr.next;
    } else {
      pre = curr;
    }
    curr = curr.next;
  }
  // 有个特殊情况需要注意
  // 比如 [1] 1
  // 此时pre还没后移到head链表上
  // 所以pre指向null没有改变head链表
  // head仍然是 [1]
  return hair.next;
};
// @lc code=end

