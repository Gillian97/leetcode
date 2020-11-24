/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

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
// 根据题目要求, 只有归并排序符合
// 由于空间复杂度为常量级别, 只有使用迭代排序的方法
// 由底部向上合并 非递归方式
var sortList = function (head) {
  if (!head || !head.next) return head;
  // 计算链表的长度
  let length = 0;
  let curr = head;
  while (curr != null) {
    length++;
    curr = curr.next;
  }
  // 子链表的长度
  // <<=1 二进制向左移动一位 对应的十进制数扩大两倍
  let dummyHead = new ListNode(0, head);
  let dummy = dummyHead;
  for (let i = 1; i < length; i <<= 1) {
    dummy = dummyHead;
    curr = dummy.next;
    while (curr != null) {
      let head1 = curr;
      for (let j = 1; j < i && curr.next != null; j++) {
        curr = curr.next;
      }
      let head2 = curr.next;
      curr.next = null;
      curr = head2;
      for (let j = 1; j < i && curr != null && curr.next != null; j++) {
        curr = curr.next;
      }
      let next = null;
      if (curr != null) {
        next = curr.next;
        curr.next = null;
      }
      let mergeRes = merge(head1, head2);
      dummy.next = mergeRes;
      while (dummy.next != null) {
        dummy = dummy.next;
      }
      curr = next;
    }
  }
  return dummyHead.next;
};


// 合并两个有序链表
const merge = (head1, head2) => {
  let dummyHead = new ListNode(0);
  let dummy = dummyHead, curr1 = head1, curr2 = head2;
  while (curr1 != null && curr2 != null) {
    if (curr1.val <= curr2.val) {
      dummy.next = curr1;
      curr1 = curr1.next;
    } else {
      dummy.next = curr2;
      curr2 = curr2.next;
    }
    dummy = dummy.next;
  }
  if (curr1 != null) dummy.next = curr1;
  if (curr2 != null) dummy.next = curr2;
  return dummyHead.next;
}

