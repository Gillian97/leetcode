/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
// 遍历到每一个节点 比较得出最小深度
// 不知道为什么 总是返回100 没能修改minVal的初始值
/*
var minDepth = function (root) {
  if (!root) return 0;
  let minVal = 100;
  // 这个深度记录的是 当前节点存在的话 算上当前节点的高度
  helper(root, 1, minVal);
  return minVal;
};

var helper = (root, depth, minVal) => {
  // 叶子节点 这一路径高度确定
  // 将当前高度与目前最小高度作比较 更新最小高度
  // 每到一个叶子节点都会更新最小高度
  if (!root.left && !root.right) {
    minVal = Math.min(depth, minVal);
  }
  // 不是叶子节点还可以继续向下计算长度
  if (root.left) helper(root.left, depth + 1, minVal);
  if (root.right) helper(root.right, depth + 1, minVal);
}
*/

var minDepth = function (root) {
  if (!root) return 0;
  // 叶子节点
  if (!root.left && !root.right) return 1;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  // 加上根节点自己的深度
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};
// @lc code=end

