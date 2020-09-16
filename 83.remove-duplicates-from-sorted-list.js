/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
// 由于是排过序的链表
// 所以重复元素都会在一块
// 不断比较curr与curr.next的val是否相等
// 相等则跳过该重复元素,不等才改变curr的位置
// 直至curr遍历完链表的所有元素
var deleteDuplicates = function (head) {
  if (!head) return null;
  let curr = head;
  while (curr) {
    // 最后一个元素是不同元素 到达链表末尾
    if (!curr.next) return head;
    while (curr.val == curr.next.val) {
      curr.next = curr.next.next;
      // 最后一个元素是相同元素 到达链表末尾
      if (!curr.next) {
        return head;
      }
    }
    curr = curr.next;
  }
};
// @lc code=end

