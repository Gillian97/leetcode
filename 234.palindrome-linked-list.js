/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
// 判断回文链表 只能遍历一次
// 将链表后半段原地翻转 再将前后部分分别比较
// 然后关键是 快慢指针法寻找链表中心点
var isPalindrome = function (head) {
  if (!head || !head.next) return true;
  let fast = head, slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  // 不管链表长度是奇数还是偶数 需要进行的操作都是一样的
  // slow 为后半部分链表的起点
  slow.next = reverse(slow.next);
  slow = slow.next;
  // 将前后两部分链表逐个节点对值进行比较
  // 如果有值不等 说明不是回文
  // 前半部分的长度是>=后半部分的
  // 所以当slow=null时, head=null或者head是最后一个节点
  // 由于回文的两种形式, 此时就可以结束比较了
  while (slow) {
    if (head.val != slow.val) {
      return false;
    }
    head = head.next;
    slow = slow.next;
  }
  return true;
};

// 翻转链表
var reverse = (head) => {
  let res = new ListNode(null);
  let curr = head, cn, rn;
  while (curr) {
    cn = curr.next;
    rn = res.next;
    res.next = curr;
    curr.next = rn;
    curr = cn;
  }
  return res.next;
}

// @lc code=end

