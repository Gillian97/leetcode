/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
/* 1. 节点标记法
  每一个访问过的节点, 都额外加一个tag属性
  如果有环,则最后会访问到有tag属性的节点
  直接返回true即可
*/
var hasCycle1 = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let curr = head;
  // 遍历链表
  while (curr) {
    if (curr.tag)
      return true;
    curr.tag = true;
    curr = curr.next;
  }
  return false;
};
/**
 * 
 * 2. 用map来存储访问过的节点
 */
var hasCycle2 = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let curr = head;
  // Map的key可以是函数或者对象或者任意基本类型
  let map = new Map();
  // 遍历链表
  while (curr) {
    if (map.has(curr))
      return true;
    map.set(curr, true);
    curr = curr.next;
  }
  return false;
};

/**
 * 
 * 3. 快慢指针
 * 定义一快一慢两个指针, 如果链表有环, 则两个指针最后一定会相遇
 * 不使用额外的存储空间
 */
var hasCycle = function (head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head, fast = head.next;
  // 如果快指针的下一个节点是空, 则没有环
  while (fast.next) {
    if (slow == fast) {
      return true
    }
    // 快指针每次走两步
    fast = fast.next.next;
    // 如果快指针是空 则没有环
    if (!fast) return false
    // 慢指针每次走一步
    slow = slow.next;
  }
  return false;
};

// @lc code=end

