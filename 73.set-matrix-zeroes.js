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
/**
 * Approach 1: Additional Memory Approach
 * 
 * use additional memory to keep a track of 
 * rows and columns which need to be set to zero.
 * 
 * Complexity Analysis
 * Time Complexity: O(M \times N)O(M×N) where M and N are 
 * the number of rows and columns respectively.
 * 
 * Space Complexity: O(M + N)O(M+N).
 * 
 * */
/*
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let pos = {};
    pos.row = new Set();
    pos.col = new Set();

    // 记录所有元素为0的位置
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                pos.row.add(i);
                pos.col.add(j);
            }
        }
    }
    // 代码更加精简
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (pos.row.has(i) || pos.col.has(j)) {
                matrix[i][j] = 0;
            }
        }
    }
};
*/

// our space complexity needs to O(1).
/**
 * Approach 2: Brute O(1) space.
 * 
 * 这个我看懂了，就是把需要改变的值置成temp，后面再改
 * 
 * Complexity Analysis
 * Time Complexity : O((M×N)×(M+N)) 
 * where M and N are the number of rows and columns respectively. 
 * Even though this solution avoids using space, but is very inefficient since in worst case for every cell 
 * we might have to zero out its corresponding row and column. Thus for all (M×N) 
 * cells zeroing out (M+N) cells.
 * 
 * Space Complexity : O(1)
 *  
 * */
var setZeroes = function (matrix) {
    let temp = 'modified';
    let m = matrix.length;
    let n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                for (let k = 0; k < m; k++) {
                    // 在标记需要改变的值时，目前已经是0的需要先去除
                    // 因为还要继续找接下来0的位置
                    if (matrix[k][j] != 0)
                        matrix[k][j] = temp;
                }
                for (let k = 0; k < n; k++) {
                    if (matrix[i][k] != 0)
                        matrix[i][k] = temp;
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == temp) {
                matrix[i][j] = 0;
            }
        }
    }

    console.log(matrix);
}

let test = [
    [0, 1, 2, 0],
    [1, 2, 1, 3],
    [1, 1, 1, 8]
]
setZeroes(test)
// @lc code=end

