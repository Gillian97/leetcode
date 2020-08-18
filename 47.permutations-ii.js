/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * solution 1
 * 算法思路:
 * 计算全排列的过程, 但是保留结果时不保留重复的组合,时间复杂度和全排列一致
 * 肯定有能优化的地方
 */
var permuteUnique = function (nums) {
  let len = nums.length;
  let resArr = new Set(); // 结果数组
  let path = new Array();
  let used = new Array();
  // 初始化状态变量
  for (let i = 0; i < len; i++) {
    used.push(false);
  }
  dfs(resArr, nums, len, path, 0, used);
  let res = Array.from(resArr);
  for(let i = 0; i < res.length; i++){
    res[i] = res[i].split(',');
  }
  // console.log(res);
  return res;
};

var dfs = (resArr, nums, len, path, depth, used) => {
  if (depth === len) {
    // 注意不能resArr.push(path) 后面path改变会影响res里的值
    // js 值传递 传的是变量的地址 需要将path的深拷贝放入
    // 使用js的set去重, 重复的组合将不能被加入
    resArr.add(path.slice().join(',')); 
    return;
  }
  for (let i = 0; i < len; i++) {
    if (!used[i]) {
      path.push(nums[i]);
      used[i] = true;
      dfs(resArr, nums, len, path, depth + 1, used);
      used[i] = false; // 由于重新开始放入元素, 将已经放入的元素的状态置false
      path.pop(); // 弹出最后一个元素 路径回到上一个状态
    }
  }
}

let test = [-1,2,-1,2,1,-1,2,1]
permuteUnique(test);
// @lc code=end

