/*
 * @lc app=leetcode id=875 lang=javascript
 *
 * [875] Koko Eating Bananas
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
/**
 * 经典二分查找问题
 * 思路：K存在最小值即K>=X时，均满足题意
 * 利用二分查找找到第一个使得possible(K)=true的K值
 * 吃下每一堆的时间为：Math.ceil(p/K), ceil为向上取整
 */
var minEatingSpeed = function (piles, H) {
    // 能吃完所有香蕉的最慢速度一定在二者之间
    let low = 1, // 最慢的速度
        high = Math.pow(10, 9); // 最快的速度
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2); // middle v
        // 利用二分法不断寻找速度的中间值
        // 直至找到能吃完香蕉的最小速度
        // low 和 high 的范围要包含最小答案
        if (!possible(mid, H, piles)) {
            // mid吃不完，但是mid+1可能能吃完，所以low=mid+1
            // low = mid 也行，但是由于mid已经判断过了不行
            // 所以low = mid + 1，少做一层判断
            low = mid + 1;
        } else {
            // mid吃的完，但是mid-1不一定吃的完，所以high = mid
            // 如果high=mid-1，则区间内可能都是吃不完的K
            high = mid;
        }
    }
    // console.log(low);
    return low;
};

var possible = (v, H, piles) => {
    let totalTime = 0;
    for (let i = 0; i < piles.length; i++) {
        totalTime += Math.ceil(piles[i] / v);
    }
    if (totalTime > H)
        return false;
    else
        return true;
}

let piles = [30, 11, 23, 4, 20], H = 6;
minEatingSpeed(piles, H)

// @lc code=end

