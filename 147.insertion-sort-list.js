/*
 * @lc app=leetcode id=147 lang=javascript
 *
 * [147] Insertion Sort List
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
// 使用插入排序对链表进行排序
// 插入排序是: 不断将没有排序的元素加入已经排好序的部分
// 单向链表只能从前往后遍历
// 这里顺便学习了单向链表
var insertionSortList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  // 第一个元素默认已经排好序
  // curr 从下一位开始
  let curr = head.next;
  // 初始化
  // 排好序的部分此时只有head一个元素
  // 末尾指向null
  // 与需要排序的部分分开
  head.next = null;
  let cn, hn;
  while (curr) {
    // 保留curr的后一部分
    cn = curr.next;
    // curr比有序的第一个元素小
    // 则直接置于有序部分的头部
    if (curr.val <= head.val) {
      curr.next = head;
      head = curr;
    } else {
      // curr 比第一个有序元素大
      // 则需要遍历后面的有序元素
      // 直到找到有序排列中比curr大的元素x
      // 则curr插入到 x的前面
      // 为了保留 x 的前一个节点
      // 将curr.val与h.next.val进行比较, 而不是h.val
      let h = head;
      while (h.next && curr.val > h.next.val) {
        h = h.next;
      }
      // 将curr插入至 h 与 x 节点之间
      hn = h.next;
      h.next = curr;
      curr.next = hn;
    }
    // curr向后移动一位
    curr = cn;
  }
  return head;
};
// @lc code=end

