/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  let curr = head;
  let left = new ListNode(null);
  let i = 0; // 第一次交换的时候 需要记住链表头 后面就不需要了
  // 只有当 curr.next 也有值的时候, 才交换
  // 否则就直接返回
  while (curr && curr.next) {
    let temp = curr.next.next;
    let nextNode = curr.next;
    nextNode.next = curr;
    left.next = nextNode;
    curr.next = temp;
    left = curr;
    curr = curr.next;
    if (i == 0)
      head = nextNode;
    i++;
  }
  return head;
};
// @lc code=end