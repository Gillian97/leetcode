/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 * 大体思路是: 
 * 先计算出链表的长度len, 再将k与len进行比较, 
 * k>len的话, 将k中len的整数倍减去之后, 就是最后需要移动的元素的个数
 */

var rotateRight = function (head, k) {
  if (head == null) {
    return null;
  }
  // 计算链表长度
  // 此时right指向最后一个元素
  let left = head, right = head, len = 1;
  while (right.next) {
    right = right.next;
    len++;
  }
  if (len == 1 || k == len) {
    return head;
  }
  // 取余之后是实际上需要移动的元素
  let num = k % len;
  // 由于在计算链表长度的时候, right已经指向链表尾部
  // 左右指针间隔k-1个元素
  // 所以左指针需要向右移动len-num-1个位置
  // 具体的边界条件可以在测试中验证是否正确
  for (let i = 0; i < len - num - 1; i++) {
    left = left.next;
  }
  right.next = head;
  head = left.next;
  left.next = null;
  return head;
};
// @lc code=end
