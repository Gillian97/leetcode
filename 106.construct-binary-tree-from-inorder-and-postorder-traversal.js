/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
};

var build = (inorder, inStart, inEnd, postorder, poStart, poEnd) => {
  // 递归出口 base case
  if (inStart > inEnd || poStart > poEnd) {
    return null;
  }
  // 根据后序遍历找到根节点
  let rootVal = postorder[poEnd];
  let index = -1;
  // 在中序遍历中找到根节点对应的位置
  for (let i = inStart; i <= inEnd; i++) {
    if (rootVal == inorder[i]) {
      index = i;
      break;
    }
  }

  // 构造根节点
  let root = new TreeNode(rootVal);
  root.left = build(inorder, inStart, index - 1, postorder, poStart, poStart + index - inStart - 1);
  root.right = build(inorder, index + 1, inEnd, postorder, poStart + index - inStart, poEnd - 1);
  return root;
}
// @lc code=end

