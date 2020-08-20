/*
 * @lc app=leetcode id=90 lang=javascript
 *
 * [90] Subsets II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 递归解法会生成重复项
// var subsetsWithDup1 = function (nums) {
//   let len = nums.length;
//   let res = [[]];
//   for (let i = 0; i < len; i++) {
//     let l = res.length;
//     for (let j = 0; j < l; j++) {
//       // 每次都从头加入元素
//       // 造成很多重复项 其实结果去重也可以 但是肯定不是最优解法
//       let ele = res[j].concat([nums[i]]);
//       res.push(ele);
//     }
//   }
//   console.log(res);
//   return res;
// };

/**
 * 
 * @param {*} nums 
 * 排序+去重
 */
var subsetsWithDup = function (nums) {
  nums = nums.sort(); // 排序操作 使得相同元素相邻
  let len = nums.length;
  let res = [];
  for (let i = 0; i <= len; i++) {
    recur(i, 0, len, [], res, nums);
  }
  console.log(res);
  return res;
}

var recur = (depth, first, len, curr, res, nums) => {
  if (curr.length == depth) {
    res.push(curr.slice()); // 将当前子集的深拷贝加入结果数组
    return;
  }
  for (let i = first; i < len; i++) {
    if (i > first && nums[i] == nums[i - 1]) {
      // 每次当作为起始点往数组加入元素时,不能加入与上一个元素相同的元素
      continue;
    }
    curr.push(nums[i]);
    recur(depth, i + 1, len, curr, res, nums);
    curr.pop(); // 回溯 回到初始状态
  }
}

let test = [1, 2, 2, 2]
subsetsWithDup(test)
// @lc code=end

