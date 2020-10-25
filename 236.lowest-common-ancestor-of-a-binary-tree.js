/*
 * @lc app=leetcode id=236 lang=javascript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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
// 这里与BST的区别就是 BST根据与根节点的大小比较 一定能够确定p/q存在或者不存在
// 但是这里由于没有大小关系 必须每个节点都访问到 才能确定能否在这棵子树中找到目标节点
let tar; // 使用全局变量标记找到的根节点
var lowestCommonAncestor = function (root, p, q) {
  helper(root, p, q);
  return tar;
};
var helper = (root, p, q) => {
  if (!root) return 0;
  let left = helper(root.left, p, q);
  let right = helper(root.right, p, q);
  let mid = (root == p || root == q) ? 1 : 0;
  // 一旦找到目标节点 就记录下来
  // 将某棵子树的根节点是p 该子树的某个节点是q的情况考虑了进去
  // {3,5,1,6,2,0,8,#,#,7,4} 5 4 该测试案例 两个节点都在左子树上
  // 不能左子树上找到一个节点就返回 这样会错过另外一个节点
  if (left + right + mid >= 2) {
    tar = root;
    // 这里直接return也不太行
  }
  // 但是返回上一层的是 0/1 只能返回找到或未找到 不能显示是否全找到
  return (left + right + mid) > 0;
}
// @lc code=end

