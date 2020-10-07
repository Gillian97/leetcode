/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
 * @param {number} sum
 * @return {number[][]}
 */
/* 递归法 回溯 */
var pathSum = function (root, sum) {
  let res = [];
  dfs(root, sum, res, []);
  return res;
};

var dfs = (root, sum, res, arr) => {
  // 还有sum但是该节点已经为空 说明此路不通
  if (!root) return;
  /* 叶子节点 */
  if (!root.left && !root.right) {
    if (root.val == sum) {
      arr.push(root.val);
      res.push(arr.slice()); // 加入数组的深拷贝
      arr.pop(); // 添加的子节点记得pop出来一下
    }
    return;
  }
  /* 非叶子节点 */
  arr.push(root.val); // 将访问过的节点接入数组中
  dfs(root.left, sum - root.val, res, arr); // sum 值传递
  dfs(root.right, sum - root.val, res, arr); // sum 值传递
  // 左右节点都访问过之后 将该节点pop出来 该节点下的路径已经访问完毕
  arr.pop();
}
// @lc code=end

