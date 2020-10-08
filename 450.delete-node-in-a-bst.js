/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */
// 时间复杂度利用BST的特性
// 无重复值
var deleteNode = function (root, key) {
  if (!root) return null;
  // 先写出代码框架
  if (root.val == key) {
    // 删除节点一共有三种情况
    // leaf node
    // 直接删除 返回null
    if (!root.left && !root.right) {
      return null;
    } else if (!(root.left && root.right)) {
      // 只有一个非空子节点
      // 让这个子节点替代自己的位置
      if (root.left) return root.left;
      if (root.right) return root.right;
    } else {
      // 删除的节点有两个子节点
      // 删除时不能破坏BST的性质
      // 找到右子树的最小节点或者左子树的最大节点去替换它
      /*
      这里找右子树的最小节点
      目标是最左侧的节点 只要该节点没有左子树(即没有比当前节点值更小的节点)
      该节点就是最小的
      */
      let curr = root.right;
      while (curr) {
        if (!curr.left) {
          break;
        } else {
          curr = curr.left;
        }
      }
      // 最小节点的值替换需要删除的节点的值
      root.val = curr.val;
      // 删除右子树的最小节点
      root.right = deleteNode(root.right, curr.val);
    }

  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    root.right = deleteNode(root.right, key);
  }
  return root;
};
// @lc code=end

