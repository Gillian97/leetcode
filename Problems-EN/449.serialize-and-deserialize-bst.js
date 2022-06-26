/*
 * @lc app=leetcode id=449 lang=javascript
 *
 * [449] Serialize and Deserialize BST
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// 按照二叉树的序列化与反序列化方式实现吧
// 选一种方式 详情可见 297
// 这里中序遍历仍然找不到根节点
// 这里采用后序遍历
var serialize = function (root) {
  if (!root) return '';
  let res = ser_post(root);
  console.log('res:', res);
  return res;
};
var ser_post = (root) => {
  if (!root) return '#';
  return ser_post(root.left) + ',' + ser_post(root.right) + ',' + root.val;
}


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data == '') return null;
  let arr = data.split(',');
  return des_post(arr);
};
var des_post = (arr) => {
  let val = arr.pop();
  if (val == '#') return null;
  let root = new TreeNode(val);
  root.right = des_post(arr);
  root.left = des_post(arr);
  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

