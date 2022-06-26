/*
 * @lc app=leetcode id=60 lang=javascript
 *
 * [60] Permutation Sequence
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
// solution 1
// 全排列的方法
// 只是在结果数组长度=k时停止继续递归
var getPermutation = function (n, k) {
  // init array
  let arr = new Array();
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  // init use array
  // 标记数组的对应元素是否被使用
  let use = new Array();
  for (let i = 0; i < n; i++) {
    use.push(false);
  }
  let curr = new Array(), res = new Array(), flag = false;
  // 目标:找到n个元素的所有排列
  // 约束:每个子串的长度都是n
  // 选择:每次选中一个元素后,都从头开始选择
  dfs(arr, use, curr, res, k, flag);
  // console.log('res:', res);
  return res[k - 1];
};

var dfs = (arr, use, curr, res, k, flag) => {
  // console.log('curr:', curr, 'res:', res, 'use:', use);
  // 判断数组长度是否符合要求
  if (res.length == k) {
    // console.log('满足要求');
    // flag = true;
    return;
  }
  if (curr.length == arr.length) {
    res.push(curr.join(''));
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (use[i] == false && res.length < k) {
      curr.push(arr[i]);
      use[i] = true;
      dfs(arr, use, curr, res, k, flag);
      curr.pop();
      use[i] = false;
      // console.log('curr after dfs:', curr, 'and use:', use, 'i:', i);
    }
  }
}

let a = 4, b = 3;
getPermutation(a, b)
// @lc code=end

