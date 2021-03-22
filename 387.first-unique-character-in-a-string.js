/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 双重循环
var firstUniqChar1 = function (s) {
  const str = s.split('');
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    flag = false;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === str[i]) {
        flag = true;
        str.splice(j, 1);
        j--;
      }
    }
    // 说明有重复元素
    // 该元素不合适
    if (!flag) {
      return str[i];
    }
  }
  return ' ';
};

// 只需要遍历一次
// leetcode 是返回坐标, 不过都一样
var firstUniqChar = function (str) {
  const map = new Map();
  // 没有重复元素 对应false
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], map.has(str[i]) ? false : i);
  }
  // 数据结构 map 的遍历
  for (let pair of map.entries()) {
    if (pair[1] !== false) return pair[1];
  }
  return -1;
}

// @lc code=end

