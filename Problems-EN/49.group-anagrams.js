/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 将字符串按照构成分组
// 我的思路是: 将每个字符串按照字符拆分,然后排序,然后作为字典的key
// 相同key的就将元素index加入key对应的数组[]
// 将字符串按照构成分组
// 我的思路是: 将每个字符串按照字符拆分,然后排序,然后作为map的key
// 相同key的就将元素index加入key对应的数组[]
var groupAnagrams = function (strs) {
  let len = strs.length;
  if (len == 1) return [strs];
  let map = {}, key;
  for (let i = 0; i < len; i++) {
    // 对每个字符串的字符拆分-排序-重组为string
    // 以至于相同字母组成的str的key会一致
    key = strs[i].split('').sort().toString();
    // 看map是否存在
    // 不存在生成[]
    // 存在往[]里push元素
    if (map[key] == undefined) {
      map[key] = [i];
    } else {
      map[key].push(i);
    }
  }
  // map中value是数组, 包含字母组成相同的一组字符串的index
  // 遍历每一个数组, 将index替换为strs里对应的str
  for (let k in map) {
    for (let i = 0; i < map[k].length; i++) {
      map[k][i] = strs[map[k][i]];
    }
  }
  // 直接返回对象的values, 所有value被添加进[]并返回
  // 本来是又新创建了个数组来存储结果, 这样直接返回values更节省空间
  return Object.values(map);
};

let test = ["eat", "tea", "tan", "ate", "nat", "bat"];
groupAnagrams(test);
// @lc code=end

