/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 * 
 * tags: array | backtracking(回溯) | bit-manipulation
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 字典排序（二进制排序） 子集
/*
var subsets = function (nums) {
  let len = nums.length;
  let subSets = [];
  // 根据数组长度计算器其子集数量
  let subSetsNum = Math.pow(2, len);
  for (let i = 0; i < subSetsNum; i++) {
    // 十进制转换为二进制
    // 每一个二进制都唯一对应一个子集
    let setNoStr = i.toString(2);
    while (setNoStr.length < len) {
      //如果长度不足 len，前面添加 0
      setNoStr = '0' + setNoStr;
    }
    let setNoList = setNoStr.split('');
    let subSet = [];
    for (let j = 0; j < len; j++) {
      if (setNoList[j] == '1') {
        subSet.push(nums[j]);
      }
    }
    subSets.push(subSet);
  }
  return subSets;
};
*/

// 递归解法
// 这个解法挺巧妙的
// 每次都把新元素加进已有的所有子集, 生成新的子集
// 因为每个元素只有在和不在两种情况
/*
var subsets = function (nums) {
  let subSets = [[]];
  let len = nums.length;
  if (len == 0)
    return subSets

  for (let i = 0; i < len; i++) {
    let l = subSets.length;
    for (let j = 0; j < l; j++) {
      let ele = subSets[j].concat([nums[i]]);
      subSets.push(ele);
    }
  }
  return subSets;
}
*/

// 回溯解法
/* to do */

let test = [1, 2, 3]
subsets(test);
// @lc code=end

