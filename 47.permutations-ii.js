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
var permuteUnique1 = function (nums) {
  let len = nums.length;
  let resArr = new Set(); // 结果数组
  let path = new Array();
  let used = new Array();
  // 初始化状态变量
  for (let i = 0; i < len; i++) {
    used.push(false);
  }
  dfs1(resArr, nums, len, path, 0, used);
  let res = Array.from(resArr);
  for (let i = 0; i < res.length; i++) {
    res[i] = res[i].split(',');
  }
  // console.log(res);
  return res;
};

var dfs1 = (resArr, nums, len, path, depth, used) => {
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

// 相同元素只选第一个作为起点
// 时间复杂度：O(N×N!)，这里 N 为数组的长度, 考虑最差情况, 即没有重复元素
// 空间复杂度：O(N×N!)。 共有 N! 种可能, 每一种可能都需要用长度为N的数组存储
var permuteUnique = function (nums) {
  let len = nums.length;
  let resArr = new Array(); // 结果数组
  let path = new Array();
  let used = new Array();
  nums = nums.sort();
  // 初始化状态变量
  for (let i = 0; i < len; i++) {
    used.push(false);
  }
  dfs(resArr, nums, len, path, 0, used);

  console.log('resArr:', resArr);
  return resArr;
};

var dfs = (resArr, nums, len, path, depth, used) => {
  // console.log('nums:',nums);
  if (depth === len) {
    // 注意不能resArr.push(path) 后面path改变会影响res里的值
    // js 值传递 传的是变量的地址 需要将path的深拷贝放入
    // 使用js的set去重, 重复的组合将不能被加入
    resArr.push(path.slice());
    console.log(path.slice());
    return;
  }
  for (let i = 0; i < len; i++) {
    if (!used[i]) {
      if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
        // used[i] = true;说明将该点设置为起点,但是实际上是,相同的数只取第一个作为起点, 其他的都跳过(被剪枝)
        // 去寻找下一个不同的起点
        // 但是不能设置为true,这样后面相同的数又会被设置为起点
        continue;
      } else {
        path.push(nums[i]);
        used[i] = true;
        dfs(resArr, nums, len, path, depth + 1, used);
        used[i] = false; // 由于重新开始放入元素, 将已经放入的元素的状态置false
        path.pop(); // 弹出最后一个元素 路径回到上一个状态
      }
    }
  }
}

let test = [-1, 2, -1]
permuteUnique(test);
// @lc code=end

