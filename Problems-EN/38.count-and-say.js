/*
 * @lc app=leetcode id=38 lang=javascript
 *
 * [38] Count and Say
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
// 不断替换当前需要计数的字符串
var countAndSay = function (n) {
  // 特殊情况 特殊处理
  if (n == 1) return '1';
  let s = '11';
  let res = '', count = 0;
  // 接下来的计数 代表的是 从'11'开始进行的若干轮计数
  // n=5 代表从 '11' 开始进行 5-2=3 轮计数
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < s.length - 1; j++) {
      // 当前元素与后一个元素相同的情况
      if (s[j] == s[j + 1]) {
        count++;
        // 后一个元素是最后一个元素相同
        if (j + 1 == s.length - 1) {
          count++;
          res = res + count + s[j + 1];
          count = 0; // 注意一轮遍历结束 count置零
        }
      } else { // 遇见相邻两个元素不相等的情况 则对当前元素的计数停止 计数结果放入结果中
        count++;
        res = res + count + s[j];
        count = 0; // 要继续数一个不同的数 则重新开始计数 count置零
        // 最后一个元素与前一个元素不同 则结果单独添加
        if (j + 1 == s.length - 1) {
          res = res + 1 + s[j + 1];
        }
      }
    }
    s = res;
    res = '';
  }
  return s;
};

countAndSay(5);
// @lc code=end

