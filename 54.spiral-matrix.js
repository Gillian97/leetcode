/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 旋转矩阵
// 按层遍历 输出结果
var spiralOrder = function (matrix) {
  let m = matrix.length; // 矩阵的行数
  if (m == 0) return [];
  let n = matrix[0].length; // 矩阵的列数
  let res = []; // 存储结果序列
  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;
  // 按照顺时针方向
  while (top <= bottom && left <= right) {
    // 添加top从左到右的一行
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (top == bottom) break; // 判断结束情况

    // 添加right从上到下的一列
    for (let j = top + 1; j <= bottom; j++) {
      res.push(matrix[j][right]);
    }
    if (left == right) break; // 判断结束情况

    // 添加bottom从右到左的一行 
    for (let i = right - 1; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }

    // 添加left从下到上的一列
    for (let j = bottom - 1; j >= top + 1; j--) {
      res.push(matrix[j][left]);
    }
    // 修改边界值 进入下一层
    top++; left++; bottom--; right--;
  }
  // 直接在循环中判断两个边界是否相等 就不用再另外判断奇数偶数
  // 然后分情况讨论了
  /*
  // m n 均是偶数 则退出循环后可以直接返回res
  // m n 至少有一个为奇数
  退出循环时则会出现 top==bottom 或者 left==right
  if (m % 2 != 0 || n % 2 != 0) {
    if (top == bottom) {
      for (let i = left; i <= right; i++) {
        res.push(matrix[top][i])
      }
    } else {
      for (let i = top; i <= bottom; i++) {
        res.push(matrix[i][left])
      }
    }
  }
  */
  return res;
}

let test = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

spiralOrder(test);
// @lc code=end

