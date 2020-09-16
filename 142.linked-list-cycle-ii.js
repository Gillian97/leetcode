/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 使用快慢指针
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  // 快慢指针的起始点应该一样
  let fast = head;
  let slow = head;
  while (slow) {
    // 快指针的速度是慢指针的2倍
    slow = slow.next;
    // 在没有环的情况下
    // fast指针会最先到达链表尾部, 直接返回null;
    // fast指针最后的位置,要不倒数第一,要不倒数第二
    // 与链表长度的奇偶数以及每次走的步数有关
    // 这里fast指针是每次走两步
    if (!fast.next) return null
    fast = fast.next.next;
    if (!fast) return null
    // 说明有环 两指针第一次相遇
    if (fast == slow) {
      // 快指针移动至链表头
      // 慢指针停在原地
      fast = head;
      // 二者均以每次一步的速度继续向前走, 直至再次相遇
      // 这里方法需要证明
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      // 返回的是环的起始节点的指针
      return fast;
    }
  }
};

// @lc code=end

