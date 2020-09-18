/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
// 完全自己想的法子 太棒了
// 大体思路就是,用两个指针, 一个指向奇数节点, 一个指向偶数节点
// 遍历完head之后, 再将两个链表进行拼接
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;
  let oddList = new ListNode(null);
  let evenList = new ListNode(null);
  let odd = oddList, even = evenList;
  // 初始化第一个奇数节点
  odd.next = head;
  odd = odd.next;
  // 初始化第一个偶数节点
  even.next = head.next;
  even = even.next;
  while (even && even.next) {
    odd.next = odd.next.next;
    odd = odd.next;
    even.next = even.next.next;
    even = even.next;
    // 链表长度为奇数 此时 even==null
    // 链表长度为偶数 此时 even.next==null
    // 两种情况的任何一种情况都应该退出循环
  }
  // 对奇数链与偶数链进行拼接
  odd.next = evenList.next;
  return oddList.next;
};
// @lc code=end

