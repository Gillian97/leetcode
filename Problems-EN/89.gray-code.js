/*
 * @lc app=leetcode id=89 lang=javascript
 *
 * [89] Gray Code
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
/* 递归法 */
var grayCode = function (n) {
  if (n == 0) return [0];
  let res = helper(n, ['0', '1'], 1);

  res = res.map((val) => {
    return toNum(val);
  })
  return res;
};

var helper = (n, level, depth) => {
  // 递归结束条件
  if (depth == n) return level;

  // 正序前面+0
  let arr1 = level.map((val) => {
    return '0' + val;
  })
  // 逆序前面+1
  level.reverse();
  let arr2 = level.map((val) => {
    return '1' + val;
  })

  level = arr1.concat(arr2);
  return helper(n, level, depth + 1);
}

// 二进制字符串转为十进制数
var toNum = (str) => {
  let n = str.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Number(str[i]) * Math.pow(2, n - 1 - i);
  }
  return sum;
}
// @lc code=end

