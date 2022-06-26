/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
// 迭代翻转
// 空间复杂度 O(1)
var reverseList1 = function (head) {
  let rever = new ListNode(null);
  let temp;
  while (head) {
    temp = head.next;
    head.next = rever.next;
    rever.next = head;
    head = temp;
  }
  return rever.next;
};

// 递归翻转
// 需要注意的是, p是指向head的一个指针
// 并不是另外的链表
// 但是由于每一次都会生成p指针重新指向目前已经倒好序的链表
// 所以递归过程中的空间复杂度为O(1)+O(2)+...+O(N)=O(N)
var reverseList = function (head) {
  if (!head || !head.next) return head;
  let p = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return p;
};
// @lc code=end

