/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 合并有交集的若干个区间
var merge = function (intervals) {
  let len = intervals.length
  if (len == 0 || len == 1) return intervals;
  // 首先对区间进行排序 根据数组的第一列进行排序
  // 如果不排序 后面在合并区间时也会两两交换 等于排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 将数组中的区间进行两两合并
  // 如果某两个邻近区间a1 a2没有合并完成
  // 那么由于排序的原因 a1更不会和a3合并
  let preIndex = 0, currIndex = 1, mergeRes;
  while (currIndex < len) {
    // 判断两个区间是否能合并
    // 不能返回false 能则返回合并后的结果
    mergeRes = isMerge(intervals[preIndex], intervals[currIndex]);
    // 不能合并
    if (mergeRes == false) {
      preIndex = currIndex;
      currIndex++;
    } else { // 进行合并
      intervals[preIndex] = mergeRes;
      intervals.splice(currIndex, 1);
      // currIndex 此时不变
      len = intervals.length;
    }
  }
  return intervals;
};

var isMerge = (inter1, inter2) => {
  // 两个区间能合并的前提条件是 有交集
  let num0 = inter1[0], num1 = inter1[1], num2 = inter2[0], num3 = inter2[1];
  if (num1 < num2) {
    return false;
  } else if (num1 >= num2 && num1 <= num3) { // 不是包含关系的交集
    return [num0, num3];
  } else { // 前一个区间包含后一个区间
    return inter1;
  }
}

let test = [[1, 4], [2, 3]];
merge(test);
// @lc code=end

