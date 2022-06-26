/*
 * @lc app=leetcode id=623 lang=javascript
 *
 * [623] Add One Row to Tree
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
// 层次遍历
var addOneRow = function (root, v, d) {
  // 在第一层插入新节点 原来的根节点作为新根节点的左孩子
  if (d == 1) {
    let newRoot = new TreeNode(v);
    newRoot.left = root;
    return newRoot;
  } else {
    let level = [root]; // 根据题意 root一定存在
    let depth = 0;
    helper(level, depth, d, v);
    return root;
  }
};

var helper = (level, depth, d, v) => {
  let len = level.length, node;
  // 当前层节点的深度
  depth++;
  if (depth == d - 1) {
    // 将当前层节点的左右节点均换成新节点
    // 对于每个根节点 都新建两个左右节点
    for (let i = 0; i < len; i++) {
      let leftNode = new TreeNode(v);
      let rightNode = new TreeNode(v);
      leftNode.left = level[i].left;
      rightNode.right = level[i].right;
      level[i].left = leftNode;
      level[i].right = rightNode;
    }
    return;
  } else {
    // 将下一层节点加入
    for (let i = 0; i < len; i++) {
      node = level.shift();
      if (node.left) level.push(node.left);
      if (node.right) level.push(node.right);
    }
    // 看下一层节点的深度是否满足要求
    helper(level, depth, d, v);
  }
}
// @lc code=end

