/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/** my solution
 * 第一次失败是因为没有注意到
 * 整数也可以是负的
 * 还在相减之前判断了一下大小
 */
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     let value = target - nums[i];
//     // console.log('value:' + value);
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] == value) {
//         return [i, j]
//       }
//     }
//   }
//   return null;
// };

/**
 * good solution
 * 
 * 将访问过的元素和下标以map的结构存起来
 * 每次访问新元素时,都检查与新元素的差值是否出现过
 * 如果出现过,则得到结果
 * 如果没有出现过,说明该新元素目前尚未匹配到另一半
 * 将新元素放进map里,后面等待被匹配
 * 
 * 使用Map结构能有效减少对已经访问过的元素的查找时间
 */

var twoSum = (nums, target)=>{

  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if(map.has(target-nums[i])){
      return [map.get(target-nums[i]), i];
    }else{
      map.set(nums[i], i);
    }
  }
  return [];
}

// @lc code=end

