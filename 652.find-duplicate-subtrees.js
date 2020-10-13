/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */
// 找到重复子树
// 首先要知道自己是啥样子 然后知道其他子树是啥样子
// 使用序列化的方式去存储子树的结构 用一个额外的数据结构存储所有的子树
var findDuplicateSubtrees = function (root) {
  let subTrees = {}, res = [];
  traverse(root, subTrees, res);
  return res;
};

// 知道自己的样子 首先得知道自己的左右子树的样子
// 返回后序遍历子树的序列化结果 来描述树结构
var traverse = (root, obj, res) => {
  if (!root) return '#'; // 空节点使用#表示
  let leftTree = traverse(root.left, obj, res); // 左子树结构
  let rightTree = traverse(root.right, obj, res); // 右子树结构
  // 字符串描述root为根节点的子树的样子
  let subTree = leftTree + ',' + rightTree + ',' + root.val;
  // 判断子树是否重复
  if (obj.hasOwnProperty(subTree)) {
    obj[subTree]++;
    // 重复即可加入结果集
    if (obj[subTree] == 2) {
      res.push(root);
    }
  } else {
    obj[subTree] = 1;
  }
  // 需要将当前子树的结构返回给上一层
  return subTree;
}
// @lc code=end

