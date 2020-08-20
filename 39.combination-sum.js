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
var combinationSum = function (candidates, target) {
  let len = candidates.length;
  candidates = candidates.sort();
  let ele = [], res = [];
  recur(candidates, target, len, ele, res);
  console.log(res);
  return res;
};

var recur = (candidates, target, len, ele, res) => {
  for (let i = 0; i < len; i++) {
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
      recur(candidates, tar, len, ele, res);
      ele.pop(); // 第2次
    }
  }
}

let can = [1,2, 3], tar1 = 3;
combinationSum(can, tar1);
// @lc code=end

