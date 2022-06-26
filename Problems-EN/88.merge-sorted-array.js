/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 说明没有自己的元素
    if (m == 0) {
        for (let i = 0; i < n; i++) {
            nums1[i] = nums2[i];
        }
    } else {
        let len = nums1.length;
        let i = 0;
        let j = m;
        let k = 0;
        while (i < len && k < n) {

            if (nums2[k] >= nums1[i] && nums2[k] < nums1[i + 1]) {
                nums1.splice(i + 1, 0, nums2[k]);
                nums1.pop();
                j++;
                k++;
            } else if (nums2[k] >= nums1[j - 1]) {
                nums1[j] = nums2[k];
                j++;
                k++;
            } else if (nums2[k] <= nums1[0]) {
                nums1.unshift(nums2[k]);
                nums1.pop();
                j++;
                k++;
                i = 0;
                continue;
            }
            i++;
        }
    }
};

let nums1 = [0, 0, 3, 0, 0, 0, 0, 0, 0], m = 3,
    nums2 = [-1, 1, 1, 1, 2, 3], n = 6

merge(nums1, m, nums2, n)
console.log(nums1);


// @lc code=end

