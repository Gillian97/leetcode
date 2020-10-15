/*
 * @lc app=leetcode id=655 lang=javascript
 *
 * [655] Print Binary Tree
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
 * @return {string[][]}
 */
var printTree = function (root) {
  let height = getHeight(root);
  let n = Math.pow(2, height) - 1; // 每一层的数量
  // 初始化二维数组
  let arr = new Array(height), a = new Array(n);
  for (let i = 0; i < n; i++) a[i] = "";
  for (let i = 0; i < height; i++)  arr[i] = a.slice();

  genArr(root, arr, 0, 0, n - 1);
  return arr;
};

// 计算二叉树的高度
var getHeight = (root) => {
  if (!root) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// 填充二维数组
/**
 * 
 * @param {TreeNode} root 根节点
 * @param {Array} arr 需要填充的数组
 * @param {Number} i 节点的深度
 * @param {Number} lo 该节点的放置范围
 * @param {Number} hi 
 */
var genArr = (root, arr, i, lo, hi) => {
  if (!root) return;
  let mid = (lo + hi) / 2;
  arr[i][mid] = root.val.toString(); // 根节点放置在中间位置
  // 递归在下一层放置左右节点
  genArr(root.left, arr, i + 1, lo, mid - 1); // 左节点的放置范围[lo, mid-1]
  genArr(root.right, arr, i + 1, mid + 1, hi); // 右节点的放置范围[mid+1, hi]
}
// @lc code=end

