/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
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
 * @return {number[][]}
 */
// 层序遍历但是使用一个flag值进行标记
/* 递归法 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  helper([root], res, true);
  return res;
};

// flag控制节点添加顺序
var helper = (nodes, res, flag) => {
  let len = nodes.length;
  if (len == 0) return null;
  let arr = [], nextNodes = [];
  for (let i = 0; i < len; i++) {
    //  假设flag==true为从左至右顺序添加该层节点
    if (flag) {
      arr.push(nodes[i].val);
    } else {
      arr.push(nodes[len - 1 - i].val);
    }
    // 添加下一层节点仍然是从左往右
    if (nodes[i].left) nextNodes.push(nodes[i].left);
    if (nodes[i].right) nextNodes.push(nodes[i].right);
  }
  res.push(arr);
  helper(nextNodes, res, !flag);
}
// @lc code=end

