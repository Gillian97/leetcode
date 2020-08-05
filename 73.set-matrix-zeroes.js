/*
 * @lc app=leetcode id=73 lang=javascript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// 无脑解法 反正能出结果
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let pos = {};
    pos.row = new Set();
    pos.col = new Set();

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                pos.row.add(i);
                pos.col.add(j);
            }
        }
    }
    for (let i = 0; i < m; i++) {
        if (pos.row.has(i)) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0
            }
        }

    }
    for (let j = 0; j < n; j++) {
        if (pos.col.has(j)) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0
            }
        }

    }

    // console.log(pos, matrix);
};

let test = [
    [0, 1, 2, 0],
    [1, 2, 1, 3],
    [1, 1, 1, 8]
]
setZeroes(test)
// @lc code=end

