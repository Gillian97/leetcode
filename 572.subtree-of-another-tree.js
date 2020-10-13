/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
// 二叉树遍历 序列化二叉树
// 对t进行序列化 看s的所有子树结构有无和t相等的
// (我还以为包括t的子树 搞了一下午)
var isSubtree = function (s, t) {
  /* 获取t的序列化结构 */
  let t_str = traverse(t);
  /* 获取s的所有子树结构 看是否与t_str相等 */
  return traverseFind(s, t_str) == true ? true : false;
};

var traverse = (root) => {
  if (!root) return '#';
  let left = traverse(root.left);
  let right = traverse(root.right);
  let subTree = left + ',' + right + ',' + root.val;
  // 将该层序列化的结果返回上一层
  return subTree;
}

var traverseFind = (root, res) => {
  if (!root) return '#';

  // 如果某个子树返回是true 说明找到了相同的结构
  // 就不用向下递归了 直接返回true即可
  let left = traverseFind(root.left, res);
  // 使用===时 1===true返回false
  if (left == true) return true;

  let right = traverseFind(root.right, res);
  if (right == true) return true;

  let subTree = left + ',' + right + ',' + root.val;
  // 子树结构与目标值相等
  if (res == subTree) return true;
  return subTree;
}
// @lc code=end

