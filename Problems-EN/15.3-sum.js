/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * solution 1
 * test cases all passed, but time limit exceeded!!!
 */
/*
var threeSum = function (nums) {
  let resStrSet = new Set();
  let keys = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (!keys.has(nums[i])) {
      keys.add(nums[i]);
      // 拷贝数组,不影响nums数组本身
      let nums_cp = nums.slice(0);
      // 从当前值去除掉之后的数组里找值
      nums_cp.splice(i, 1);
      // 计算出目标值
      let target = 0 - nums[i];
      let twoSet = twoSum(nums_cp, target);
      // console.log('twoSet', twoSet, 'nums[i]', nums[i]);
      let twoArr = setToArr(twoSet);
      // console.log('twoArr', twoArr,  'nums[i]', nums[i]);
      if (twoArr.length != 0) {
        for(let j = 0; j < twoArr.length; j++)
          resStrSet.add([nums[i]].concat(twoArr[j]).sort().toString());
      }
    }
  }
  return setToArr(resStrSet);
};

var toInt = (arr) => {
  let arrInt = new Array();
  for (let i = 0; i < arr.length; i++) {
    arrInt.push(Number(arr[i]));
  }
  return arrInt;
}

var setToArr = (set) => {
  let resArr = new Array();
  for (let i of set.values()) {
    let eleArr = i.split(',');
    resArr.push(toInt(eleArr));
  }
  return resArr;
}

var twoSum = (nums, target) => {
  let numsSeen = new Set();
  let valSet = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (numsSeen.has(target - nums[i])) {
      valSet.add([target - nums[i], nums[i]].sort().toString());
    } else {
      numsSeen.add(nums[i]);
    }
  }
  return valSet;
}
*/

// solution 2 ：将数组排序后的双指针解法
var threeSum = function (nums) {
  nums = nums.sort((a, b) => a - b); // 将数组正序排列
  let len = nums.length;
  let res = [];
  for (let i = 0; i < len - 2; i++) {
    // 第一个数大于 0，肯定加起来和不为0了
    if (nums[i] > 0) {
      break;
    }
    // 去掉重复元素
    if (i > 0 && nums[i] == nums[i - 1])
      continue;
    let target = -nums[i];
    let left = i + 1, right = len - 1;
    while (left < right) {
      if (nums[left] + nums[right] == target) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 这里是否判断 left < right 都没有那么重要, 因为最外面还会再判断一次
        // 但是加上判断可能会少做一次计算
        // 去掉重复元素
        while (left < right && nums[left] == nums[left - 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right + 1]) {
          right--;
        }
      } else if (nums[left] + nums[right] < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};


let test = [14, 4, 6, -1, 10, 9, -8, 7, -13, 14, -13, -11, -8, -9, 11, 14, -8, -14, -13, 7, -10, -15, -13, -11, -11, 11, 14, 13, 2, -14, 1, -7, -2, 14, -1, -15, 9, 7, -1, 3, 6, 1, 7, 5, -1, -5, 4, -2, -4, -1, -9, -7, -1, -7, -11, 3, 12, 10, -7, -1, 12, 1, 8, -13, 1, 14, 9, -13, 6, -7, -3, -11, 2, -11, 10, -14, -1, -9, 0, 2, 5, 6, 3, -11, 6, 7, 0, 3, 3, 0, -12, -8, -13, 3, -14, -5, 2, 10, -11, -14, -12, 1, -10, 5, 5, 7, -1, 11, 14, 6, -10, -4, -3, 8, -7, 10, 1, 8, -1, -11, -15, -6, -12, -13, 12, -11]
console.log(threeSum(test));
// @lc code=end

