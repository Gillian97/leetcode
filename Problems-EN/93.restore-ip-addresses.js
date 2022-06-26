/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * 
 * 合法的url的条件:
 * 将字符串分为四个部分, 每个部分的数字[0,255], 不超过3位
 * 中间的数字不能以0开头
 * 
 * 就是大概有想法但是却实现不出来, 说明思路还不是很清楚
 * 需要画树状图帮助自己理解!!
 */
var restoreIpAddresses = function (s) {
  let len = s.length;
  // 字符串长度不够则直接返回空数组
  if (len > 12 || len < 4)
    return [];
  let res = new Array();
  let ip = new Array();
  let start = 0;
  dfs(res, ip, start, s);
  return res;
};

/**
 * 
 * @param {array} res 存储合法ip
 * @param {array} ip 存储ip的每一段
 * @param {number} start 剩余需要继续递归的子串
 * @param {string} s 
 */
var dfs = (res, ip, start, s) => {
  // 在开始切割子串之前, 判断ip是否符合题意
  // s 已经遍历完毕且ip是四段的话, 该ip可以进结果数组了
  if (ip.length == 4) {
    if (start == s.length) {
      res.push(ip.join('.'));
      return;
    }
    // 未遍历完s ip已经4段 该ip不合题意
    if (start < s.length) {
      return;
    }
  }
  // s 已经遍历完了,但是ip不到四段,返回
  if (ip.length < 4 && start == s.length) {
    return;
  }
  // 从每个起始位置开始切割都是三个长度
  for (let l = 1; l <= 3; l++) {
    if (start + l > s.length) return; // 索引超过边界
    if ((l == 2 || l == 3) && s[start] == '0') return; // 2/3子串以0开头
    let part = s.substring(start, start + l); // 切割子串
    if (Number(part) > 255) return; // 子串不符合条件 这里已经l==3了 continue和return是一样的效果
    // part符合条件
    ip.push(part.slice());
    // 下次递归的子串的起始位置是start+l
    dfs(res, ip, start + l, s);
    ip.pop();
  }
}

let test = "23541";
restoreIpAddresses(test);
// @lc code=end

