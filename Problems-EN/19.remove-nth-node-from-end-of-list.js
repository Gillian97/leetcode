/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
// 首先想到的方法是计算链表的长度
// 找到要删除的那个节点的位置
// 再进行删除
var removeNthFromEnd1 = function (head, n) {
  if (head.next == null && n == 1) {
    return null
  }
  let cur = head;
  let len = 0;
  while (cur) {
    len++;
    cur = cur.next;
  }
  let start = head;
  // 删除第一个节点
  if (n == len) {
    start = head.next;
  } else {
    let pos = len - n;
    let i = 0;
    // 在目标元素前一位停下
    while (i < pos - 1) {
      i++;
      head = head.next;
    }
    // 删除最后一个节点时会在倒数第二个节点停下
    // head.next 不为空
    head.next = head.next.next;
  }
  return start;
};

/**
 * 
 * @param {*} head 
 * @param {*} n 
 * 利用双指针, 只用遍历一遍链表
 */
var removeNthFromEnd = (head, n) => {
  if (head.next == null) {
    return null;
  }
  let left = head, right = head, start = head;
  // 控制两个指针之间的距离, 确保当右指针到末尾时, 左指针刚好在要删除的元素的前一个
  // 而且链表只要遍历一遍 比前一种方法好
  for (let i = 0; i <= n; i++) {
    // 说明删除的是第一个元素
    // 那么就直接删除第一个元素并返回
    if (right.next == null && i == n-1) { 
      start = left.next;
      return start;
    }
    right = right.next;
  }
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return start;
}
// @lc code=end

