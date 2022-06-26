/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 116 是完美二叉树 这个不是完美二叉树
// solution 1 使用层次遍历 存储每一层的节点并在其中建立连接 然后将下一层的节点添加进数组 继续建立连接
// 建立连接时 记得先存储数组的长度
// 使用了队列的特性
var connect1 = function (root) {
  if (!root) return null;
  helper([root]);
  return root;
};

var helper = (nodes) => {
  let n = nodes.length;
  // 数组为空 没有再需要连接的节点
  if (n == 0) return null;
  // 将前n个节点一一指向后者
  // i 标记进行多少次这样的操作
  for (let i = 0; i < n; i++) {
    let node = nodes.shift();
    // 最后一层的节点不需要再指向后面的节点
    if (i < n - 1 && nodes[0]) {
      node.next = nodes[0];
    }
    // 将该层节点的下一层节点均添加进数组中
    if (node.left) nodes.push(node.left);
    if (node.right) nodes.push(node.right);
  }
  helper(nodes);
}

// solotion 2 降低空间复杂度的做法 上一层建立下一层的next连接 不用使用数组存储节点
let last = null, nextStart = null; // 使用全局变量
var connect = function (root) {
  if (!root) return null;
  let start = root;
  /*let last = new Object, nextStart = new Object;*/
  // 将start这一层节点的下一层节点建立next连接
  while (start) {
    // 每次开始遍历链表时 重置参数
    last = null;
    nextStart = null;
    /* 
    for (let p = start; p; p = p.next) {
      // 参数传递按值传递 没有改变last与nextStart 两个变量 被坑惨了
      if (p.left) { handler(p.left, last, nextStart); }
      if (p.right) { handler(p.right, last, nextStart); }
    }*/
    for (let p = start; p; p = p.next) {
      if (p.left) handler(p.left);
      if (p.right) handler(p.right);
    }
    start = nextStart;
  }
  return root;
};

// last标记当前链表的最后一个节点
var handler = (p) => {
  if (last) {
    last.next = p;
  }
  // nextStart的值只改变这一次
  // 当p第一次存在时 nextStart被赋值为下一层的第一个节点
  if (!nextStart) {
    nextStart = p;
  }
  last = p;
}
// @lc code=end

