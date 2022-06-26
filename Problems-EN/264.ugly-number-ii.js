/*
 * @lc app=leetcode id=264 lang=javascript
 *
 * [264] Ugly Number II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// solution 1:预计算1690个丑数 但是很耗时
var nthUglyNumber1 = function (n) {
  let nums = [];
  let queue = [1], num = 0;
  let seen = new Set();
  seen.add(1);
  while (nums.length < 1690) {
    // 弹出最小元素
    num = queue.shift();
    if (!nums.includes(num)) nums.push(num);
    for (let i of [2, 3, 5]) {
      let newNum = num * i;
      if (seen.has(newNum)) continue;
      seen.add(newNum);
      queue.push(newNum);
    }
    // 对 queue 中的元素去重并排序
    queue.sort((a, b) => a - b);
  }
  // 返回对应丑数
  return nums[n - 1];
};

// solution 2: 动态规划
// 待思考
var nthUglyNumber = function (n) {
  let dp = new Array(n);
  dp[0] = 1;
  let index2 = 0, index3 = 0, index5 = 0;
  for (let i = 1; i < n; i++) {
    let t2 = dp[index2] * 2;
    let t3 = dp[index3] * 3;
    let t5 = dp[index5] * 5;
    
    dp[i] = Math.min(t2, t3, t5);
    if (dp[i] == t2) index2++;
    if (dp[i] == t3) index3++;
    if (dp[i] == t5) index5++;
    console.log(t2, t3, t5);
    console.log(index2, index3, index5, '\n');
  }
  return dp[n - 1];
}

nthUglyNumber(6)
// @lc code=end

