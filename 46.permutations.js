/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let len = nums.length;
    let resArr = new Array();
    let path = new Array();
    let used = new Array();
    for (let i = 0; i < len; i++) {
        used.push(false);
    }
    dfs(resArr, nums, len, path, 0, used);
    console.log('resArr:', resArr);
    return resArr;
};

var dfs = (resArr, nums, len, path, depth, used) => {
    console.log('depth:', depth, 'resArr:', resArr);
    if (depth == len) {
        resArr.push(path);
        console.log('resArr1:', resArr);
        return;
    }
    for (let i = 0; i < len; i++) {
        if (!used[i]) {
            path.push(nums[i]);
            used[i] = true;
            console.log('path', path);
            dfs(resArr, nums, len, path, depth + 1, used);
            used[i] = false;
            path.pop(); // 弹出最后一个元素
        }
    }
}

let test = [1, 2, 3]
permute(test);
// @lc code=end

