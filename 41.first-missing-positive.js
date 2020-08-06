/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 
 * solution 1: 将数组映射为map，时间复杂度符合要求，空间不符合
 */

var firstMissingPositive1 = function (nums) {
    let len = nums.length
    let m = new Map();
    for (let i = 0; i < len; i++) {
        m.set(nums[i], 1);
    }
    for (let i = 1; i <= len; i++) {
        if (!m.has(i)) {
            console.log(i);
            return i;
        }
    }
    return len + 1;
};


/**
 * solution 2: 将数组视为hash表
 * 要找的数字一定在[1,n+1]中
 * 
 * 算法思路：
 * 将数字k放在k-1的位置上，这样放一遍
 * 确保每个正整数都在自己应该在的位置上
 * 
 * 然后遍历一遍数组，第一个出现的不在自己位置上的元素下标+1
 * 就是我们需要获得的结果
 * 
 * 借用了数组下标的有序性
 * 
 * 最差的情况，所有数都不在正确的位置上
 * while把所有数都看了一遍并放置在正确的位置上
 * 数在正确的位置，则该次也不需要while循环
 * 即：所有的while循环一共将len个数放在各自该在的位置
 * 区别只是一/多次while循环，但是处理的总数据量都是len个数
 * 因此，时间复杂度是 O(n)
 * 由于是在给定数组上操作，没有开辟新的空间
 * 因此空间复杂度是 O(1)
 * 符合题目要求
 */

var firstMissingPositive = (nums) => {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        while (nums[i] > 0 && nums[i] != i + 1 && nums[i] < len) {
            // 如果需要放置的位置上的数是合适的，则不处理
            // 直接i向后移
            if (nums[nums[i] - 1] == nums[i])
                break
            else {
                // 将 nums[i] 放在 nums[i]-1 的位置上
                let posVal = nums[nums[i] - 1];
                nums[nums[i] - 1] = nums[i];
                nums[i] = posVal;
            }
        }
    }

    for (let i = 0; i < len; i++) {
        if (nums[i] != i + 1) {
            // 碰见第一个下标与值不符的，说明该位置是负数/大于下标+2的数
            // 所以返回最小正整数 i+1
            return i + 1;
        }
    }
    return len + 1;
}


/**
 * solution 3: 将数组排序后,使用二分查找依次查找[1,len]是否在有序数组中
 * 不在就返回该数字
 * 排序时间复杂度是 O(NlogN)，不符合要求
 * 且二分查找耗时
 */
var firstMissingPositive2 = (nums) => {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    console.log(nums);
    for (let i = 1; i <= len; i++) {
        if (!binarySearch(nums, i)) {
            console.log(i);
            return i
        }
    }
    return len + 1
}

var binarySearch = (nums, k) => {
    let len = nums.length;
    let left = 0, right = len - 1, mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (k == nums[mid]) {
            return true;
        } else if (k > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}


let test = [3, 4, -1, 1]
firstMissingPositive2(test);

// @lc code=end

