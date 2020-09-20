/*
 * @lc app=leetcode id=725 lang=javascript
 *
 * [725] Split Linked List in Parts
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
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  // 先计算root的长度
  let curr = root, len = 0;
  while (curr) {
    len++;
    curr = curr.next;
  }
  // 理解题意 一共分为k部分 而不是长度是k!!
  curr = root;
  // 计算宽度
  let width = Math.floor(len / k);
  let extra = len % k; // 需要长度被加一的组数
  let res = []; // 初始化长度为k的结果数组
  for (let i = 0; i < k; i++) {
    // 当k<=len的时候,curr指向null时, for循环也就结束了
    // 因为组数已经达到了k组
    // 出现curr为null的情况时, 并且走到了这里
    // 说明k>len
    // 此时只需要将null不断加入数组直至数组长度达到k
    if (!curr) {
      res.push(null);
      continue;
    }
    // 多余没有入组的元素需要加入前面的每一个组
    // 因此前extra组, 每组的元素长度需要+1
    let l = i < extra ? width + 1 : width;
    // l-1是为了控制curr指向part的最后一个元素而不是下一个
    // 便于将该链表片段加入res
    for (let j = 0; j < l - 1; j++) {
      curr = curr.next;
    }
    // curr 到达part的最后一个元素      
    let cn = curr.next;
    curr.next = null;
    res.push(root);
    curr = root = cn;
  }
  return res;
};
// @lc code=end

