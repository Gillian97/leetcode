/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 思路就是: 旋转完外圈, 再旋转内圈
// 直至内圈没有可以旋转的圈
// 没有啥可说的, 就是不断画图, 标注坐标
// 找到需要交换值的四个位置坐标间的联系与规律
var rotate = function (matrix) {
  let n = matrix.length;
  // 计算层数
  let levels = Math.floor(n / 2);
  let end, a, b, c, d;
  // 遍历层数
  for (let t = 0; t < levels; t++) {
    // 每一层右上角节点的纵坐标值
    end = n - 1 - t;
    // 每一层的矩阵大小为 m*m
    // 则只有前m-1个元素需要移动
    for (let i = t; i <= end - 1; i++) {
      // 需要进行交换的四个点的值
      a = matrix[t][i];
      b = matrix[i][end];
      c = matrix[end][end - (i - t)];
      d = matrix[end - (i - t)][t];
      // 进行交换
      matrix[t][i] = d;
      matrix[i][end] = a;
      matrix[end][end - (i - t)] = b;
      matrix[end - (i - t)][t] = c;
    }
  }
};

let test = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];
rotate(test);
// @lc code=end

