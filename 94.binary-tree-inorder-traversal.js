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
  arr.fo
  return arr;
};

var inorder = (root, arr) => {
  if (!root) return null;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}

/* 非递归 */
var inorderTraversal = (root) => {
  let res = [], stack = [];
  stack.push({ 'node': root, 'step': 0 })
  while (stack.length > 0) {
    let last = stack.length - 1;
    if (!stack[last].node) {
      stack.pop();
    } else if (stack[last].step == 0) {
      stack[last].step++;
      stack.push({ 'node': stack[last].node.left, 'step': 0 });
    } else if (stack[last].step == 1) {
      // deal root
      res.push(stack[last].node.val);
      // add right node
      stack[last].step++;
      stack.push({ 'node': stack[last].node.right, 'step': 0 });
    } else {
      // 回到根节点 弹出
      stack.pop();
    }
  }
  return res;
}

// @lc code=end

