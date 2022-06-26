/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 完成了所有组合的查找
// 下一步目标是如何去重
// 去重: 设置减值的起始位置, 保证减的值不小于当前元素, 以去除重复排列
var combinationSum = function (candidates, target) {
  let len = candidates.length;
  // 将数组正序排列
  candidates = candidates.sort((a, b) => a - b);
  let ele = [], res = [];
  recur(candidates, target, len, 0, ele, res);
  console.log(res);
  return res;
};

var recur = (candidates, target, len, begin, ele, res) => {
  // 设置开始减值的初始位置
  for (let i = begin; i < len; i++) {
    // 由于数组是排序之后的
    // 在减去元素的过程中
    // eg 过程一: -2-2-3  那么: -3-2-2一定会重复之前的过程
    // 较大的元素在一开始时, 一定会被减到,
    // 因此从较大元素开始减时, 小元素就可以跳过了,这个过程之前一定出现过
    // 当设置起始位置之后, 下一个减去的元素肯定不会小于当前元素
    // if (candidates[i] < ele[ele.length - 1]) {
    //   return;
    // }
    let tar = target - candidates[i];
    if (tar == 0) {
      ele.push(candidates[i]);
      res.push(ele.slice());
      ele.pop(); // 需要连续pop两次 第1次
      return;
    } else if (tar < 0) {
      return;
    } else {
      ele.push(candidates[i]);
      // 元素candidates[i] 被添加之后, 下一次减值的起点应该是位置i
      recur(candidates, tar, len, i, ele, res);
      ele.pop(); // 第2次
    }
  }
}

let can = [3, 12, 9, 11, 6, 7, 8, 5, 4], tar1 = 15;
combinationSum(can, tar1);
// @lc code=end

