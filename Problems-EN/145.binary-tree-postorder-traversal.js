/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
// 二叉树后序遍历
/* 递归法 */
var postorderTraversal1 = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

var helper = (root, res) => {
  if (!root) return;
  helper(root.left, res);
  helper(root.right, res);
  res.push(root.val);
}

/* 非递归法 */
// 对遍历过程进行步骤的划分
// 比如这里就是: 0 访问左节点之前 1 访问左节点后 访问右节点前 2 访问右节点后
var postorderTraversal = (root) => {
  let res = [];
  let stack = [];
  stack.push(context(root))
  // 栈不为空
  while (stack.length > 0) {
    let last = stack.length - 1;
    if(stack[last].node == null){
      stack.pop();
    } else if (stack[last].step == 0) {
      // 添加左节点进栈
      stack[last].step++;
      stack.push(context(stack[last].node.left));
    }else if(stack[last].step == 1){
      // 添加右节点进栈
      stack[last].step++;
      stack.push(context(stack[last].node.right));
    }else{
      // 左右节点均已处理 现处理根节点
      res.push(stack[last].node.val);
      stack.pop();
    }
  }
  return res;
}

var context = (node) => {
  return { node, "step": 0 }
}
// @lc code=end

