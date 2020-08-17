/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
// js大数相加容易丢失精度, 有安全范围, 不行
/**
 * 
 * 整个算法的过程模拟乘法的计算过程
 * 用一个数组来存储每一步计算的结果
 * 时间复杂度: n^2
 */
var multiply = function (num1, num2) {
  // 有一个参数为0,则结果为0
  if (num1 == '0' || num2 == '0')
    return '0';
  let len1 = num1.length,
    len2 = num2.length,
    len = len1 + len2;
  // 数组存储计算结果 长度暂时为两个字符串长度之和
  let resArr = new Array(len);
  // 初始化结果数组
  for (let i = 0; i < len; i++) {
    resArr[i] = 0;
  }
  // 循环反过来的原因是: 每次都是先拿因数1的每一位与因数2的同一位相乘
  for (let j = len2 - 1; j >= 0; j--) {
    let n2 = parseInt(num2[j]);
    // 计算结果放置的位置
    let pos = len - len2 + j;
    for (let i = len1 - 1; i >= 0; i--) {
      let n1 = parseInt(num1[i]);
      let res = n1 * n2;
      addNext(res, resArr, pos, 1);
      // 数位升高一位, 结果放置也要对应往左一位
      pos--;
    }
  }
  // 去除结果数组最左边的 0
  while (resArr[0] == '0') {
    resArr.shift()
  }
  return resArr.join('');
};

// flag 为 1 表示要与当前位置数值相加
// 为 0 则表示不用相加
var addNext = (num, resArr, pos, flag) => {
  let posNum = num % 10, // 取余数 置于当前位置
    addNum = Math.floor(num / 10); // floor 向下取整

  resArr[pos] = (flag == 1) ? resArr[pos] + posNum : posNum;
  resArr[pos - 1] += addNum;

  if (resArr[pos] >= 10) {
    // 与当前数值相加之后, 数值大于10, 则当前仍然需要进位
    // 但是不需要再与当前位置数值相加了
    addNext(resArr[pos], resArr, pos, 0);
  }
  // 进位最多只会等于 10
  if (resArr[pos - 1] == 10) {
    addNext(resArr[pos - 1], resArr, pos - 1, 0);
  }
}

// @lc code=end

