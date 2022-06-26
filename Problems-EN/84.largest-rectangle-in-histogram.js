/*
 * @lc app=leetcode id=84 lang=javascript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 我知道了 高度为h的矩形的面积 只能与相邻右侧>h的矩形合并计算
var largestRectangleArea = function (heights) {
  let stack = [];
  // 在heights的首尾均添加高度为0的元素
  // 是为了第一个高度值左侧有比他小的元素下标
  // 最后一个高度值右侧有比他小的元素下标
  heights.unshift(0);
  heights.push(0);
  // 存储最大面积
  let area = 0;
  for (let i = 0; i < heights.length; i++) {
    // 只有 当前元素严格<栈顶元素才计算面积
    // 弹栈 计算面积
    // 在刚开始时 stack=[]
    // 直接添加第一个元素下标
    // 后来由于不会再有元素严格小于0 所以除了一开始stack是空 
    // 一旦开始遍历 heights ,stack 添加第一个元素之后, 就不会是空了
    while (stack.length != 0 && heights[stack[stack.length - 1]] > heights[i]) {
      let tmp = stack.pop();
      // 当前栈顶是左侧第一个小于弹出元素的元素下标
      let left = stack[stack.length - 1];
      // i 是右侧第一个小于弹出元素的元素下标
      area = Math.max(area, (i - left - 1) * heights[tmp]);
    }
    stack.push(i);
    // 最后栈里只剩下 0 0
    // console.log('stack:', stack);
  }
  return area;
};

let test = [2, 1, 5, 6, 2, 3];
largestRectangleArea(test)
// @lc code=end

