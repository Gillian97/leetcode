/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @return {boolean}
 */
// 首先中序遍历出一个有序数组
var findTarget = function (root, k) {
  let arr = []; // 中序遍历结果
  inorder(root, arr);
  for (let i = 0; i < arr.length; i++) {
    // 删除当前元素的数组
    let newArr = arr.slice();
    newArr.splice(i, 1);
    if (findEle(newArr, k - arr[i])) return true;
  }
  return false;
};

// 二分查找
var findEle = (arr, t) => {
  let left = 0, right = arr.length - 1, mid = 0;
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] == t) {
      return true;
    } else if (arr[mid] < t) {
      left = mid + 1;
    } else if (arr[mid] > t) {
      right = mid - 1;
    }
  }
  return false;
}

// 中序遍历
var inorder = (root, arr) => {
  if (!root) return;
  inorder(root.left, arr);
  arr.push(root.val);
  inorder(root.right, arr);
}
// @lc code=end

