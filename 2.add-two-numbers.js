/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 节点类
class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 这个链表的存储结构是嵌套的, 即next指向的是嵌套的.
var addTwoNumbers = function (l1, l2) {
  // 定义存储想关节点的变量
  let result = new ListNode(null);
  let lastNode = result;
  let carry = 0; // 进位
  let val = 0; // 相加之后赋给当前位置的值
  // 当l1或者l2任何一方有值时, 都需要进行相加
  while (l1 || l2) {
    // 获取两个链表的初始值
    let x = l1 == null ? 0 : l1.val;
    let y = l2 == null ? 0 : l2.val;
    // 两者相加
    let num = x + y + carry;
    carry = Math.floor(num / 10); // 商
    val = num % 10; // 相加之后赋给当前位置的值
    // 新建节点添加到链表末尾
    lastNode.next = new ListNode(val);
    // 最后节点位置更新
    lastNode = lastNode.next;
    // 进行下一位置的加法
    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }
  // 当两个加数位数都加完了
  // 但是仍然可能会有进位的可能
  if (carry != 0) {
    lastNode.next = new ListNode(carry);
  }
  return result.next;
};

/*
示例结果
====result.next
ListNode {
  val: 7,
  next: ListNode {
    val: 0,
    next: ListNode {
      val: 8,
      next: null
    }
  }
}
*/
// @lc code=end

