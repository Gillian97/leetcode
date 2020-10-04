/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 构造二叉树类
// 根节点应该思考如何构造出自己
// 前序遍历的第一个节点一定是根节点
// 复杂的在于 如何根据根节点将preorder和inorder数组分为两半
// 构造根节点的左右子树
var buildTree = function (preorder, inorder) {
  return build(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

var build = (preorder, preStart, preEnd, inorder, inStart, inEnd) => {
  // 补充 base case
  // 递归出口
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }
  // 前序遍历的第一个节点是根节点
  let rootVal = preorder[preStart];
  // 根据root节点将preorder与inorder分为两半 分别构造左右子树
  // 找到中序遍历数组中rootVal的下标
  let index = -1;
  for (let i = inStart; i <= inEnd; i++) {
    if (rootVal == inorder[i]) {
      index = i;
      break;
    }
  }
  let root = new TreeNode(rootVal);
  // 递归构造左右子树
  // inorder的前后索引比较容易确定
  root.left = build(preorder, preStart + 1, preStart + index - inStart, inorder, inStart, index - 1);
  root.right = build(preorder, preStart + index - inStart + 1, preEnd, inorder, index + 1, inEnd);
  return root;
}


// @lc code=end

