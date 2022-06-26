/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 一时没有想起来用什么解法
// 因为之前删除节点都是不能改变节点自身的值
// 现在这个能改变了 害
// 这个方法令我哭笑不得, 也提醒自己注意看题目条件
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};
// @lc code=end

