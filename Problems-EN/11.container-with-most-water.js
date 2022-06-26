/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 暴力破解 果不其然 超时了

/*
var maxArea = function (height) {
  let partMaxSet = new Set();
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let yVal = height[j] < height[i] ? height[j] : height[i];
      let partArea = (j - i) * yVal;
      partMaxSet.add(partArea);
    }
  }
  let partMaxList = Array.from(partMaxSet);
  // 数字降序排列
  partMaxList.sort(function (a, b) { return b - a });
  return partMaxList[0];
  // return Math.max.apply(null, partMaxList);
};
*/

// solution two pointers
// 此算法需要证明
var maxArea = function (height) {
  let i = 0, j = height.length - 1;
  let areaList = new Array();
  while (j - i > 0) {
    if (height[i] < height[j]) {
      // 计算面积以短边为准
      areaList.push((j - i) * height[i]);
      // 移动短边有可能获得更大面积
      i++;
    } else {
      areaList.push((j - i) * height[j]);
      j--;
    }
  }
  // 将可能的面积列表倒序排列,返回第一个
  return areaList.sort((a, b) => b - a)[0]
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height))
// @lc code=end

