/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 */
// 大体思路是 每k个元素进行一次翻转
// 在翻转之前查看接下来的链表长度是否足够
// 足够则翻转 不够则停下并返回结果
// 翻转时注意连接前后链表的部分
var reverseKGroup = function (head, k) {
  // 在链表头节点前加一个节点
  // 后面翻转后的链表再与原来的链表连接要用到
  let hair = new ListNode(null, head);
  let pre = hair;
  // tail需要以pre为起点, 向后移动k个位置
  let tail = hair, right;
  while (tail) {
    // 将 tail 移动至需要翻转的链表部分的末尾
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      // 如果 tail 在向后移动但是还没有到目标位置时
      // 出现 tail 为 null 的情况
      // 说明剩余的元素已经不够翻转的数量
      // 直接返回现有结果即可
      if (!tail) return hair.next;
    }
    // head-tail的链表部分需要翻转
    // 且翻转需要head和tail仍指向翻转后链表的头和尾
    // 保留tail的后面部分
    right = tail.next;
    [head, tail] = reverse(head, tail);
    // 进行与原链表的拼接
    pre.next = head;
    tail.next = right;
    // 改变pre head的位置
    pre = tail;
    head = right;
  }
  return hair.next;
};

// 翻转链表
// 这里不用再初始化res来存储翻转后的结果
// 因为tail.next是存在的
// 可以看做已有的res使用
// 使用常数级的内存空间
var reverse = (head, tail) => {
  let p = head;
  let remain = tail.next; // 表示剩余不用翻转的部分
  let nex;
  while (p !== tail) {
    nex = p.next;
    p.next = remain;
    remain = p;
    p = nex;
  }
  tail.next = remain;
  return [tail, head];
}
// @lc code=end