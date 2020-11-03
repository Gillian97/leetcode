/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

const { magenta } = require("color-name");

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// solution 1 : 使用数组
// 每次查询为 O(n)
// 时间复杂度 mn
var canConstruct1 = function (ransomNote, magazine) {
  let arr = magazine.split('');
  for (let i of ransomNote) {
    let index = arr.indexOf(i);
    if (index < 0) return false;
    else {
      arr.splice(index, 1);
    }
  }
  return true;
};

// solution 2 : 使用 map
// 每次查询为 O(1)
// 时间复杂度 m + n
var canConstruct2 = function (ransomNote, magazine) {
  let map = new Map();
  for (let s of magazine) {
    if (map.has(s)) {
      map.set(s, map.get(s) + 1);
    } else {
      map.set(s, 1);
    }
  }

  for (let i of ransomNote) {
    if (map.has(i)) {
      if (map.get(i) - 1 == 0) {
        map.delete(i);
      } else {
        map.set(i, map.get(i) - 1);
      }
    } else {
      return false;
    }
  }
  return true;
};

// console.log(canConstruct('aa', 'ab'));
// @lc code=end

