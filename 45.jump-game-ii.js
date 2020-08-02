/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 对于当前index, 每次在能跳到的范围内
// 跳到能跳到更远地方的index
// 参考网上提示, 自己写的解答
// 有些边界条件控制的不是很好
/*
var jump = function (nums) {
  let len = nums.length;
  if (len == 1)
    return 0;
  if (nums[0] >= len - 1)
    return 1

  let step = 0;
  let nextPosMap = { 'index': 0, 'maxIndex': 0 + nums[0] };

  for (let i = 0; i < len;) {
    let indexLimit = i + nums[i];
    // 在寻找下一步跳的位置时, 步数加一
    step++;
    for (let j = i + 1; j <= indexLimit && j < len; j++) {
      if (j + nums[j] > nextPosMap.maxIndex) {
        nextPosMap.index = j;
        nextPosMap.maxIndex = j + nums[j];
      }
    }
    // index != i, 说明能跳到更远距离的index更新了, 这时才需要将当前节点 i 移到index
    // 其实肯定更新, 题目已经说了能跳到最后
    // 移动才算跳了一步
    // 同时能跳到的最远位置不要超过数组边界
    // 超过数组边界则表示步数已经能计算出来了 return
    if (nextPosMap.maxIndex < len - 1) {
      i = nextPosMap.index;
    } else {
      // 当最大位置能到达最后时, 返回step+1
      // 把跳到最后位置的一步也加上
      return step + 1;
    }
  }
};
*/

// 官方解答
// 在具体的实现中，我们维护当前能够到达的最大下标位置，记为边界。
// 从左到右遍历数组，到达边界时，更新边界并将跳跃次数增加 1。
// 官方解答我不是理解的很好
var jump = (nums) => {
  let len = nums.length;
  let maxPos = 0;
  let end = 0;
  let steps = 0;
  for (let i = 0; i < len - 1; i++) {
    // console.log('i=', i);
    maxPos = Math.max(i + nums[i], maxPos);
    if (i == end) {
      end = maxPos;
      steps++;
    }
  }
  return steps;
}

let test = [2,3,1,1,4];
jump(test)
// @lc code=end

