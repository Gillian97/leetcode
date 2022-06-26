/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 一种直接的方法就是两两合并
// 再将结果两两合并
// sorry 超时了...
/* var mergeKLists = function (lists) {

  let len = lists.length;
  if (len == 0) {
    return null
  }
  let res = lists[0];
  let curr = res;
  for (let i = 1; i < len; i++) {
    res = mergeTwoLists(res, lists[i]);
  }
  return res;
};
*/

// solution 1
// 把链表中的节点值都拿出来放在一个数组里
// 然后对数组进行排序
// 时间复杂度: 遍历链表+排序+遍历数组
// 假设总node数为N, 则总时间复杂度为 O(N)+O(NlogN)+O(N)=O(N)
// 空间复杂度为: O(N), 主要是存储节点的数组的消耗
var mergeKLists1 = function (lists) {

  let len = lists.length;
  if (len == 0) {
    return null
  }
  let arr = [], l;
  for (let i = 0; i < len; i++) {
    l = lists[i];
    while (l) {
      arr.push(l.val);
      l = l.next;
    }
  }
  arr.sort((a, b) => a - b); // 正序排列
  let res = new ListNode(null);
  let curr = res;
  for (let i = 0; i < arr.length; i++) {
    curr.next = new ListNode(arr[i]);
    curr = curr.next;
  }
  return res.next;
};

// solution 2
// 分治算法 这是一开始就想到的方法 但是不会实现🤦‍♀️
// 两两链表合并排序, 再将结果再合并, 直至只有一个结果
// 数组长度为奇数, 最后一次合并时, 是第一个与最后一个元素合并, interval*2之后会<len, 继续进行最后一次合并
// 数组长度为奇数, 最后一次合并时, 是第一个与中间元素合并, interval*2之后会=len, 跳出循环
// 时间复杂度: k=lists.length, N 为所有节点数, 归并次数*每一次归并的时间复杂度
// 每一次归并需要遍历所有的节点, 但是不需要排序, 仅仅是大小比较, O(N)
// 设一共归并的次数为x, 则有2^x = k, 则x=log2(k)(以2为底k的对数)
// 所以总共的时间复杂度是 
var mergeKLists = function (lists) {
  let len = lists.length;
  // 没有链表返回空链表
  if (len == 0) {
    return null;
  }
  let interval = 1;// 标志需要合并的两个链表之间的距离
  // 归并排序的代码更像模板
  // 只要两个元素之间的距离没有超过数组长度, 说明没有归并完毕
  while (interval < len) {
    for (let i = 0; i < len - interval; i = i + interval * 2) {
      // i的作用是, 找到所有需要合并的链表中的第一个
      // 不断地把相隔interval距离的两个链表合并
      lists[i] = mergeTwoLists(lists[i], lists[i + interval])
    }
    interval = interval * 2;
  }
  return lists[0];
}

// 合并两个链表
var mergeTwoLists = (l1, l2) => {
  if (!l1) return l2;
  if (!l2) return l1;
  let res = new ListNode(null);
  let curr = res;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 == null ? l2 : l1;
  return res.next;
}

// @lc code=end

