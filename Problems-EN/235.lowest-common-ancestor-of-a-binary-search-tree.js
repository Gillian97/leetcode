/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = (root, p, q) => {
  // 题意是 root 一定存在 不然p/q无法存在于其中
  // if (!root) return null;
  // 如果能够缩小范围 确定在左子树或者右子树上 
  // 则说明有更低一层的公共祖先
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    // 一个大于一个小于 或者 某一个节点值等于root.val
    // 最近的公共祖先都是 root
    return root;
  }
}
// @lc code=end

