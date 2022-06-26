/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
// 遍历两次链表
// 第一次按照顺序将所有不同的元素组成链表, 并给有重复元素的节点增加dup属性
// 第二次将有dup属性的节点删除, 返回结果
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr) {
    if (!curr.next) break;
    while (curr.val == curr.next.val) {
      curr.dup = true;
      curr.next = curr.next.next;
      if (!curr.next) break;
    }
    curr = curr.next;
  }
  if (!head) return null;

  let hair = new ListNode(null, head);
  let pre = hair, point = head;
  while (point) {
    while (point.dup) {
      point = point.next;
      if (!point) {
        pre.next = null;
        return hair.next;
      }
    }
    pre.next = point;
    pre = point;
    point = point.next;
  }
  return hair.next;
};
// @lc code=end

