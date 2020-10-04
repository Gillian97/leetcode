/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
// 返回一个二叉树的中序遍历结果
// 使用递归和迭代两种方法

/* 递归法 */
var inorderTraversal1 = function (root) {
  let arr = [];
  inorder(root, arr);
  return arr;
};

var inorder = (root, arr) => {
  if (!root) return null;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}

/* 迭代 */
// 不断将根节点的左节点压栈
// 然后每弹出一个节点 就访问该节点 将该节点的右孩子入栈
// 再将右孩子的所有左孩子不断入栈
// 反复该过程直至栈空
var inorderTraversal = (root) => {
  let p = root;
  let res = [], stack = [];
  // 每遇到非空二叉树先向左走
  // 循环截止条件需要这两个
  // 因为根节点在弹出时 栈是空的 但是不能结束对其右子树的访问
  // 此时p不为空
  // 真正结束时 栈为空且p指向root.right的最右边节点的空的右孩子
  while (p || stack.length != 0) {
    if (p) {
      // 非空子树先向左走
      stack.push(p);
      p = p.left;
    } else {
      // 开始弹栈 指向根节点
      p = stack.pop();
      // 获取根节点的值
      res.push(p.val);
      // 指向根节点的右子树
      p = p.right;
    }
  }
  return res;
}

// @lc code=end

