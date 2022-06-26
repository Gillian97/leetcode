/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
 * @return {number}
 */
// 数一下完全二叉树的节点个数
var countNodes = function (root) {
  /*
  // 普通二叉树计算节点数 O(N)
  if (!root) return 0;
  return 1 + countNodes(root.left) + countNodes(root.right);
  */

  /*
  // 满二叉树 计算节点数
  // 高度: 0-k 则节点总数: 2^k-1
  let h = 0;
  while (root.left) {
    h++;
    root = root.left;
  }
  // 此时的h为满二叉树的高度(从0开始)
  return Math.pow(2, h) - 1;
  */


  /* 该方法计算个数的时间复杂度缩减在于 
  子树是满二叉树时 用公式返回 这里会缩减时间复杂度
  不是满二叉树时 用普通方法数个数 */
  if (!root) return 0;

  // 判断该完全二叉树是不是满二叉树
  // 判断左右子树的高度是否一致
  // 严格的高度从1开始计算
  let l = root, r = root, lh = 1, rh = 1;
  while (l.left) {
    lh++;
    l = l.left;
  }

  while (r.right) {
    rh++;
    r = r.right;
  }

  // 左右子树不一样高 说明不是满二叉树
  // 不是满二叉树 则使用普通二叉树的计算节点的方法
  if (lh != rh) {
    // 至少左右子树有高度 说明根节点不是空
    return 1 + countNodes(root.left) + countNodes(root.right);
  }
  // 左右子树一样高 说明是满二叉树 直接返回节点数即可
  return Math.pow(2, lh) - 1; // 根据正确的高度算出的满二叉树的节点数才正确
};
// @lc code=end

