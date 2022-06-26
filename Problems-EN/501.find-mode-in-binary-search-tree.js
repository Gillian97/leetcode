/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
/* 递归法 */
// solution 1 适用于所有二叉树
// 但是没有利用到BST的特性
// 相同key的节点数最多的key列表
var findMode = function (root) {
  if (!root) return [];
  let obj = {};
  helper(root, obj);
  // 找到出现次数最多的节点并返回该节点
  let max = 1, res = [];
  for (let k in obj) {
    //  遇见次数更多的 直接更新最大值 并且节点列表更新
    if (obj[k] > max) {
      max = obj[k];
      res = [k];
      // 出现次数与最大值相等的 也加入节点列表
    } else if (obj[k] == max) {
      res.push(k);
    }
  }
  return res;
};
// 统计每个节点的出现次数
var helper = (root, obj) => {
  if (!root) return;
  obj[root.val] = obj.hasOwnProperty(root.val) ? obj[root.val] + 1 : 1;
  helper(root.left, obj);
  helper(root.right, obj);
}
// @lc code=end

