/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路很巧妙 需要分析下 最后两个节点一定会相等
// 只是是地址还是null的问题
// 最差情况是不相交
// 每个链表均遍历了两遍
// 但是额外空间只使用了两个指针变量,为常数级
var getIntersectionNode = function (headA, headB) {
  let currA = headA, currB = headB;
  while (currA != currB) {
    currA = !currA ? headB : currA.next;
    currB = !currB ? headA : currB.next;
  }
  // 不相交最后也会相等的 均是null
  // 即： 相交或者是不相交， 二者均会相等
  // 相等的话，返回的是及交点地址
  // 不相等的话，返回的是null
  return currA;
};
// @lc code=end

