/*
 * @lc app=leetcode id=87 lang=javascript
 *
 * [87] Scramble String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 抽象为无向图中的两个点是否连通
// 深度优先搜索 && 广度优先搜索

// solution 1: 递归 + 记忆化搜索
var isScramble = function (s1, s2) {
  let arr = new Array(26);
  let base = 'a'.charCodeAt(0);
  let memo = {};

  var trans = (str1, str2) => {
    let key = str1 + '/' + str2;
    if (memo.hasOwnProperty(key)) return memo[key];

    if (str1 == str2) return true;

    let n1 = str1.length, n2 = str2.length;
    if (n1 != n2)  return false;

    // 判断两个字符串每个字母出现的次数是否一致
    arr.fill(0);
    for (let i = 0; i < n1; i++) {
      arr[str1.charCodeAt(i) - base]++;
      arr[str2.charCodeAt(i) - base]--;
    }
    for (let i of arr) {
      if (i != 0) {
        memo[key] = false;
        return false;
      }
    }

    for (let i = 1; i < n1; i++) {
      if (trans(str1.slice(0, i), str2.slice(0, i)) && trans(str1.slice(i), str2.slice(i))
        || trans(str1.slice(0, i), str2.slice(n1 - i)) && trans(str1.slice(i), str2.slice(0, n1 - i))) {
        memo[key] = true;
        return true;
      }
    }
    memo[key] = false;
    return false;
  }

  let res = trans(s1, s2);
  return res;
};

let s1 = "great", s2 = "rgeat";
isScramble(s1, s2);
// @lc code=end

