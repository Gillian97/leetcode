/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1, j = b.length - 1;
  let num, carry = false, sum = '', charA, charB;
  while (a[i] || b[j]) {
    // 考虑到两个串长度不一致时的处理
    charA = (a[i] == undefined) ? '0' : a[i];
    charB = (b[j] == undefined) ? '0' : b[j];
    // 由于二进制不是十进制加法, 所以需要对相加结果进行分类讨论
    if (charA == charB) {
      num = carry ? '1' : '0';
      carry = charA == '1';
    } else {
      num = carry ? '0' : '1';
    }
    sum = num + sum;
    i--;
    j--;
  }
  // 如果两数的每一位均已对应相加完成, 但是还有进位, 需要把进位也加入结果中
  sum = carry ? '1' + sum : sum;
  return sum;
};

addBinary('1010', '1011');
// @lc code=end

