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
/*
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
*/
/**
 * 
 * Approach 3: O(1) Space, Efficient Solution
 * 
 * 不需要循环将所有需要设置的值进行标记
 * 只需要将需要置零的行列通过行首列首标记即可
 * 其中由于第一个元素的特殊性，不能同时用来标记行列，这里标记行
 * 因此需要另一个变量来标记列
 * 
 * 双重循环里不需要再嵌套循环去设置所有需要置零的元素
 * Complexity Analysis
 * Time Complexity : O(M×N)
 * Space Complexity : O(1)
 * 
 */
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let firstCol = false;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] == 0) {
                // 由于都是标记行首列首
                // 不会影响对后面元素的判断
                matrix[i][0] = 0; // 行首

                // 第一列需要标记
                if (j == 0)
                    firstCol = true
                else
                    matrix[0][j] = 0; // 列首
            }
        }
    }

    // 将目标列置零
    // 先保留行首的数据，第一列先不置零
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] == 0) {
            for (let i = 0; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
    // console.log('flag:', matrix);
    // 将目标行置零
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            for (let j = 0; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    //将第一列置零
    if (firstCol) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    // console.log(matrix);
}

let test = [
    [9, 9, 2, 8],
    [0, 1, 1, 3],
    [1, 1, 1, 9]
]
setZeroes(test)
// @lc code=end

