/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
// 前提: 要求两个方法均是常数时间复杂度和O(H)空间 next()调用时 总会有最小节点
// 初始想法是: 不断删除最小节点并返回该最小值
// 感觉js的类相关的操作不是很熟
var BSTIterator = function (root) {
  this.nodes_inorder = []; // 存储中序遍历结果
  this.inorder(root);
  this.index = -1; // 作为迭代器的标志
  this.len = this.nodes_inorder.length;
};

/**
 * @return the next smallest number
 * @return {number}
 */
// 时间复杂度不是常数 怎么做到?
// 找到最小值 至少都是o(h)

// solution 1 中序遍历核心法
// BST 中序遍历后 就是一个有序的数组
// 一个迭代器就是对一个容器(比如数组)进行遍历的对象
// 如果一个容器是一个数组的话 则迭代器很好构造 使用index或者p指针类似的即可
// 两个函数的时间复杂度都是常数, 但是空间复杂度都是O(N), 因为数组需要存储所有节点且两个方法均有用到
// 空间复杂度不满足要求
BSTIterator.prototype.next = function () {
  this.index++;
  return this.nodes_inorder[this.index]; // always be valid
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  // 注意:每次返回next时 都是index+1后的index
  return this.index + 1 < this.len ? true : false;
};

/**
 * 返回树的中序遍历结果
 */
BSTIterator.prototype.inorder = function (root) {
  if (!root) return;
  this.inorder(root.left);
  this.nodes_inorder.push(root.val);
  this.inorder(root.right);
};


/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end

