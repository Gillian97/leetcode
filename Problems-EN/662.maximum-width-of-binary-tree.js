/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 二叉树的层次遍历
var widthOfBinaryTree = function (root) {
  // 记录当前层和最大宽度
  if (!root) return 0;
  // [root, 0, 0] node depth pos
  let nodes = [[root, 0, 0]];
  let currDepth = 0, startPos = 0, maxWidth = 1;
  let node, depth = 0, pos = 0, leftPos = 0, rightPos = 0, newDist = 0;
  // nodes 动态增加
  for (let i = 0; i < nodes.length; i++) {
    // 只会看存在的节点 中间的null节点会被忽略
    if (nodes[i][0]) {
      node = nodes[i][0];
      depth = nodes[i][1];
      pos = nodes[i][2];
      // 将该节点的左右节点加入nodes
      // 标记节点位置 参考完全二叉树中的位置
      // 问题在于 大数相加超过2^52会出现精度问题
      // to do
      leftPos = 0; rightPos = 0;
      if (currDepth >= 52) {
        leftPos = sumStrings(pos.toString(), pos.toString(), 1);
        rightPos = sumStrings(pos.toString(), pos.toString(), 2);
      } else {
        leftPos = pos * 2 + 1;
        rightPos = pos * 2 + 2;
      }
      nodes.push([node.left, depth + 1, leftPos]);
      nodes.push([node.right, depth + 1, rightPos]);
      // console.log('nodes:', nodes);
      // 如果该节点深度不同
      // 则为新一层的最左侧节点 标记第一个节点
      if (currDepth != depth) {
        currDepth = depth;
        startPos = pos;
      }
      // 计算的距离也是存在的节点与所在层第一个节点的距离
      // 更新最大值
      newDist = currDepth >= 52 ? parseInt(subtract(nodes[i][2].toString(), startPos.toString())) : nodes[i][2] - startPos;
      // console.log('newDist:', newDist)
      maxWidth = Math.max(maxWidth, newDist + 1);
    }
  }
  return maxWidth;
};

// js大数计算会丢失精度
// 使用字符串进行大数相加
function sumStrings (a, b, carry) {
  var res = '', c = carry;
  a = a.split('');
  b = b.split('');
  let a_val = 0, b_val = 0;
  while (a.length || b.length || c) {
    a_val = a.length == 0 ? 0 : parseInt(a.pop());
    b_val = b.length == 0 ? 0 : parseInt(b.pop());
    c += a_val + b_val;
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, ''); // 将开头的0删除
}

// 使用字符串进行大数相减
var subtract = function (a, b) {
  //去掉a,b开头的0  
  // a = a.replace(/^0+/, '');
  // b = b.replace(/^0+/, '');
  //补零对齐  
  while (a.length < b.length) a = "0" + a;
  while (b.length < a.length) b = "0" + b;

  let result = '';
  //是否有借位  
  let minusOne = 0, c1 = 0, c2 = 0;
  //从后面位数往前相减  
  for (let i = a.length - 1; i >= 0; i--) {
    c1 = a.charAt(i) - 0;
    c2 = b.charAt(i) - 0;
    //如果当前位数无须借位  
    if (c1 - minusOne >= c2) {
      result = (c1 - c2 - minusOne) + result;
      minusOne = 0;
    } else {
      result = (c1 + 10 - c2 - minusOne) + result;
      minusOne = 1;
    }
  }
  //如果最高位仍然要借位  
  //比如："99999" - "100000"  
  if (minusOne) {
    //=> -(100000 - 99999) => -1  
    return '-' + subtract(b, a);
  }
  result = result.replace(/^0+/, '');
  return result ? result : "0";
};
// @lc code=end

