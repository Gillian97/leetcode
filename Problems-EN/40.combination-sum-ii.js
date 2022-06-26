/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let path = [], res = new Set(); // 去除重复路径
  // 升序排列
  candidates = candidates.sort((a, b) => a - b);
  helper(path, res, candidates, target);
  // 将结果转为数组
  let arr = Array.from(res);
  arr = arr.map((val) => {
    let temp = val.split(',');
    for (let i in temp) {
      // 将字符串转为整数
      temp[i] = parseInt(temp[i]);
    }
    return temp;
  })
  return arr;
};

var helper = (path, res, choice, target) => {
  if (choice[0] > target) return;
  for (let i = 0; i < choice.length; i++) {
    if (choice[i] < target) {
      path.push(choice[i]);
      helper(path, res, choice.slice(i + 1), target - choice[i]);
      path.pop();
    } else if (choice[i] == target) {
      // 这一条路径找到结果即返回 因为该层后面的候选项肯定都大于target 肯定不会再相等
      // 上一层选择继续向后遍历
      path.push(choice[i]);
      res.add(path.slice().join(','));
      path.pop();
      return;
    }
  }
}
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
// @lc code=end

