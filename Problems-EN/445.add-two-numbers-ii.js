/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 不能够翻转链表
// 使用两个栈存储数字
var addTwoNumbers = function (l1, l2) {
  // 将两个链表中的值分别存进两个栈中
  let stack1 = [], stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  // 初始化变量
  let sum = 0, carry = 0, num = 0;
  let res = new ListNode(null), rn;
  let add1, add2;
  // 当两个栈有至少一个不为空时, 都进行相加操作
  // 为空的那个栈的加数为 0
  while (stack1.length != 0 || stack2.length != 0) {
    add1 = stack1.length == 0 ? 0 : stack1.pop();
    add2 = stack2.length == 0 ? 0 : stack2.pop();
    sum = add1 + add2 + carry;
    // 商是进位 大于10为1,小于10为0
    carry = Math.floor(sum / 10);
    // 余数是相加之后结果中的数字
    num = sum % 10;
    // 将结果添加进结果列表中
    rn = res.next;
    res.next = new ListNode(num);
    res.next.next = rn;
  }
  // 当两个链表均为空时, 看是否还有进位
  // 有进位则添加进结果列表中
  if (carry != 0) {
    rn = res.next;
    res.next = new ListNode(carry);
    res.next.next = rn;
  }
  return res.next;
};

// @lc code=end

