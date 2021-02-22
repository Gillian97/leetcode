/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 对于已经排序的数组 使用二分查找可以满足复杂度
// 找到某个元素第一次与最后一次出现的位置
// 思路是 使用一次二分查找 找到目标元素 然后分别向前向后找到第一个和最后一个位置
// 但是最坏情况是遍历整个数组 时间复杂度仍然为O(N)
var searchRange = function (nums, target) {
  if (nums.length == 0) return [-1, -1];
  return [search_left(nums, target), search_right(nums, target)]
};

/* 使用开闭区间的写法 */
// 搜索左侧边界
var binary_search_left = (nums, target) => {
  if (nums.length == 0) return -1;
  let left = 0, mid;
  // 对于左右侧边界的搜索 这种写法比较普遍
  let right = nums.length; // 注意 此时的搜索区间是[left, right)
  // left = right时 此时搜索区间为[left, left) 区间为空
  while (left < right) {
    mid = left + Math.floor((right - left) / 2); // 取mid时向左偏
    if (nums[mid] == target) {
      right = mid; // 更新搜索边界为 [left, mid)
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
    // console.log('left:', left, 'mid:', mid, 'right:', right);
  }
  // 这里的left可以理解为 有多少个小于target的元素 
  // left=0表示没有小于target的元素
  // left=2表示有2个小于target的元素
  // left的取值范围是[0, nums.length]
  // return left;

  // 因此 当不存在target元素时,对left进行判断即可
  // target比所有元素都大
  if (left == nums.length) return -1;
  // 当left==0时, 说明没有元素小于target
  // target比所有元素都小
  return (nums[left] == target) ? left : -1;
}

// 探索右侧边界
// 参考上一个探索左侧边界写的
var binary_search_right = (nums, target) => {
  if (nums.length == 0) return -1;
  let left = -1, mid;
  let right = nums.length - 1; // (] 探索区间为左开右闭
  while (left < right) {
    mid = left + Math.floor((right - left + 1) / 2); // 取mid时向右偏
    if (nums[mid] == target) {
      left = mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
    // console.log('left:', left, 'mid:', mid, 'right:', right);
  }
  // 最后left与right一定相等 退出循环
  // 所有值都比target大
  if (right == -1) return -1;
  return nums[right] == target ? right : -1;
}

/* 使用全闭区间 */
// 探索左侧边界
var search_left = (nums, target) => {
  let len = nums.length;
  if (len == 0) return -1;
  let left = 0, right = len - 1, mid = 0;
  // 循环停止条件是 left = right + 1
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) { // 关键
      right = mid - 1; // 探索区间为 [left, mid-1]
    } else if (nums[mid] > target) {
      right = mid - 1; // 探索区间为 [left, mid-1]
    } else if (nums[mid] < target) {
      left = mid + 1; // 探索区间为 [mid+1, right]
    }
    // console.log('left:', left, 'mid:', mid, 'right:', right);
  }
  // 处理数组越界情况
  // target>所有值(left==nums.length) || target<所有值(right==-1)
  // nums[left] != target ps.即使right == -1 left==0 nums[0]也有可能是target
  if (left == len || nums[left] != target) {
    return -1;
  }
  return left;
}

// 使用全闭区间
// 探索右侧边界
var search_right = (nums, target) => {
  let len = nums.length;
  if (len == 0) return -1;
  let left = 0, right = len - 1, mid = 0;
  // 循环停止条件是 left = right + 1
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] == target) { // 关键
      left = mid + 1; // 探索区间为 [mid+1, right]
    } else if (nums[mid] > target) {
      right = mid - 1; // 探索区间为 [left, mid-1]
    } else if (nums[mid] < target) {
      left = mid + 1; // 探索区间为 [mid+1, right]
    }
    // console.log('left:', left, 'mid:', mid, 'right:', right);
  }
  // 处理数组越界情况
  // target>所有值(left==nums.length) || target<所有值(right==-1)
  // 即使left==len 但是 right==len-1 nums[right]也有可能是target
  if (nums[right] != target || right == -1) {
    return -1;
  }
  return right;
}

// 20210222
// 有序数组中 查找某个元素的出现次数 (左侧边界/右侧边界)

var search = function (nums, target) {
  return search_right(nums, target) - search_left(nums, target) + 1;
};

// 探索左侧区间
var search_left = (nums, t) => {
  let left = 0, right = nums.length - 1;
  let mid;
  while (left <= right) {
      mid = left + Math.floor((right - left) / 2)
      if (nums[mid] == t) {
          right = mid - 1;
      } else if (nums[mid] < t) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return left;
}

// 探索右侧区间
var search_right = (nums, t) => {
  let left = 0, right = nums.length - 1;
  let mid;
  while (left <= right) {
      mid = left + Math.floor((right - left) / 2)
      if (nums[mid] == t) {
          left = mid + 1;
      } else if (nums[mid] < t) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return right;
}

// let nums1 = [5, 5, 7, 7, 8, 8, 10], target1 = 5;
// search_right(nums1, target1);
// @lc code=end

