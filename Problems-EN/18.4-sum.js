/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let len = nums.length, res = [];
  for (let i = 0; i < len - 3; i++) {
    // 去重
    if (nums[i] == nums[i - 1] && i > 0)
      continue;

    for (let j = i + 1; j < len - 2; j++) {

      if (nums[j] == nums[j - 1] && j > i + 1)
        continue;
        
      let t = target - nums[i] - nums[j];
      let left = j + 1, right = len - 1;

      while (left < right) {
        let twoSum = nums[left] + nums[right];
        if (twoSum == t) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          // 去重
          while (left < right && nums[left] == nums[left - 1])
            left++;
          while (left < right && nums[right] == nums[right + 1])
            right--;
        } else if (twoSum > t) {
          right--;
        } else {
          left++;
        }
      }
    }
  }
  // console.log(res);
  return res;
};

let test = [1, 0, -1, 0, -2, 2];
fourSum(test, 0);


// @lc code=end

