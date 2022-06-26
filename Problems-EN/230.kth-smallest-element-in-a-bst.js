/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */
/* solution 1 递归法 */
// BST 返回其中序遍历结果 k-1是索引
/* 补充: 如果二叉搜索树频繁进行插入删除 你需要多次进行查找操作 该如何优化算法
频繁的插入删除影响树的结构 每次重新查找一遍肯定不是最优 
看增删的那个节点与上一次返回的节点val的大小比较
*/
// 时间复杂度与空间复杂度均为 O(N)
var kthSmallest1 = function (root, k) {
  let arr = [];
  inorder(root, arr);
  return arr[k - 1];
};

var inorder = (root, arr) => {
  if (!root) return;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}


/* solution 2 迭代法 */
// 中序遍历的迭代实现 只需要找到第k个元素之后返回即可
// 不用每次都返回整个中序遍历的结果
var kthSmallest = function (root, k) {
  let stack = [];
  while (true) {
    // 每次找到最左侧的节点 都是一个最小节点
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    // 此时栈顶是最小节点
    // --k是先减再赋值 先进行--的运算
    if (--k == 0) {
      return root.val;
    }
    root = root.right;
  }
};
// @lc code=end

