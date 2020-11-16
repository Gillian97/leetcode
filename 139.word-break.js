/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// solution 1 : 深度优先遍历 DFS
var wordBreak = function (str, wordDict) {
  // 减少重复计算
  let note = {};
  var dfs = (word) => {
    let n = word.length;
    if (n == 0) return true;
    if (note.hasOwnProperty(word)) return note[word];
    let res = false;
    for (let i = 0; i < n; i++) {
      res = wordDict.includes(word.slice(0, i + 1)) && dfs(word.slice(i + 1));
      if (res) break;
    }
    note[word] = res;
    return res;
  }
  return dfs(str);
};

// solution 2: 动态规划
var wordBreak2 = function (str, wordDict) {
  let memo = {};
  var dp = (i) => {
    if (i == 0) return wordDict.includes(str[0]);
    if (memo.hasOwnProperty(i)) return memo[i];
    if (wordDict.includes(str.slice(0, i + 1))) {
      memo[i] = true;
      return true;
    }
    for (let j = 0; j < i; j++) {
      if (dp(j) && wordDict.includes(str.slice(j + 1, i + 1))) {
        memo[i] = true;
        return true;
      }
    }
    memo[i] = false;
    return false;
  }
  return dp(str.length - 1);
};
// @lc code=end

