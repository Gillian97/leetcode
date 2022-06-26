/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
// 二叉树前序遍历
/* 递归法 */
var preorderTraversal1 = function (root) {
  let res = [];
  helper(root, res);
  return res
};

var helper = (root, res) => {
  if (!root) return;
  res.push(root.val);
  helper(root.left, res);
  helper(root.right, res);
}

/* 非递归法 */
// 分步骤, 0: 需处理根节点 1: 需添加左节点 2: 需添加右节点
var preorderTraversal = (root) => {
  let res = [];
  let stack = [];
  stack.push(context(root))
  // 栈不为空
  while (stack.length > 0) {
    let last = stack.length - 1;
    if(stack[last].node == null){
      stack.pop();
    } else if (stack[last].step == 0) {
      res.push(stack[last].node.val);
      // 添加左节点进栈
      stack[last].step++;
      stack.push(context(stack[last].node.left));
    }else if(stack[last].step == 1){
      // 添加右节点进栈
      stack[last].step++;
      stack.push(context(stack[last].node.right));
    }else{
      // 回到根节点 根节点已经处理完毕 弹出
      stack.pop();
    }
  }
  return res;
}

var context = (node) => {
  return { node, "step": 0 }
}
// @lc code=end

