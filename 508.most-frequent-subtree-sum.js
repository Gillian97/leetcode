/*
 * @lc app=leetcode id=508 lang=javascript
 *
 * [508] Most Frequent Subtree Sum
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
// 后序遍历 只有知道左右子树的和 才能知道该子树的和
var findFrequentTreeSum = function (root) {
  let sumObj = {};
  helper(root, sumObj);
  // 找到出现频率最高的sum值
  let maxFreq = 0, res = [], sums = Object.keys(sumObj);
  let sum = 0, freq = 0;
  for (let i in sums) {
    sum = sums[i];
    freq = sumObj[sum];
    if (freq > maxFreq) {
      res = [sum];
      maxFreq = freq;
    } else if (freq == maxFreq) {
      res.push(sum);
    }
  }
  return res;
};

var helper = (root, sumObj) => {
  if (!root) return 0;
  let leftSum = helper(root.left, sumObj);
  let rightSum = helper(root.right, sumObj);
  let sum = root.val + leftSum + rightSum;
  if (sumObj.hasOwnProperty(sum)) {
    sumObj[sum]++
  } else {
    sumObj[sum] = 1;
  }
  return sum;
}
// @lc code=end

