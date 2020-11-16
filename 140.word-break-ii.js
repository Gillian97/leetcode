/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// solution 1: 深度优先遍历 备忘录
// 自底向上
var wordBreak1 = function (str, wordDict) {
  let n = str.length;
  let memo = {};
  // 检查 str.slice(i,n) 是否能被分割
  // 能则返回所有可能的分割结果
  var dfs = (i) => {
    if (memo.hasOwnProperty(i)) return memo[i];
    if (i > n - 1) return [[]];
    let res = [];
    for (let j = i; j < n; j++) {
      let word = str.slice(i, j + 1);
      if (!wordDict.includes(word)) continue;
      let restArr = dfs(j + 1);
      for (let item of restArr) {
        res.push([word].concat(item));
      }
    }
    memo[i] = res;
    return res;
  }
  let result = dfs(0).map((val) => val.join(' '));
  return result;
};

// solution 2 : 动态规划 dp(i) 表示str.slice(0, i+1) 的分割结果
// 自顶向下
var wordBreak = (str, wordDict) => {
  let n = str.length;
  let dict = new Set(wordDict);
  let memo = {};
  var dp = (i) => {
    if (i < 0) return [[]];
    if (memo.hasOwnProperty(i)) return memo[i];
    let res = [];
    for (let j = 0; j <= i; j++) {
      let w = str.slice(j, i + 1);
      if (!dict.has(w)) continue;
      let resArr = dp(j - 1);
      for (let item of resArr) {
        res.push(item.concat([w]));
      }
    }
    memo[i] = res;
    return res;
  }
  let result = dp(n).map((val) => val.join(' '));
  return result;
}
// @lc code=end

