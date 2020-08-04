/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closest = nums[0] + nums[1] + nums[2];
  let diff = Math.abs(closest - target);
  let len = nums.length;
  for (let i = 0; i < len - 2; i++) {
    // 由于数组是排好序的
    // 如果nums[i] * 3 > target, 则 nums[i]+nums[i+1]+nums[i+2] 是接下来遍历的最小值
    // 后面差距只会越来越大
    // 将接下来最小值与当前最小值closest分别与target比较, 返回与target差距较小的那个值
    if (nums[i] * 3 > target) {
      let cDiff = Math.abs(closest - target);
      let tempMin = nums[i] + nums[i + 1] + nums[i + 2];
      let tDiff = Math.abs(tempMin - target);
      return cDiff < tDiff ? closest : tempMin;
    }
    // 双指针 遍历数组剩余元素
    let left = i + 1, right = len - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let newDiff = Math.abs(sum - target);
      if (newDiff == 0) {
        return target
      }
      if (newDiff < diff) {
        diff = newDiff;
        closest = sum;
      }
      if (sum < target)
        left++;
      else
        right--;
    }
  }
  // console.log('closest:', closest);
  return closest;
};

let test = [0, 1, 2];
threeSumClosest(test);
// @lc code=end

