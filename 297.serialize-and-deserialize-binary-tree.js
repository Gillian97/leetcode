/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
 */

// @lc code=start

// 考察二叉树的遍历方式

/* solution 1 后序遍历 */
var serialize_post = function (root) {
  if (!root) return '#' + ',';
  let left = serialize(root.left);
  let right = serialize(root.right);
  return left + right + root.val + ',';
};

// 正常情况下 遍历序列由于缺乏空指针信息无法知道树结构
// 但是这里列表信息可以知道空指针信息 可以进行复原
var deserialize_post = function (data) {
  let arr = data.split(',');
  arr.pop(); // 最后加入根节点时会多加一个','
  return des_post(arr);
};
var des_post = (arr) => {
  // 数组的最后一个节点是根节点
  let val = arr.pop();
  if (val == '#') return null;
  let root = new TreeNode(val);
  root.right = des_post(arr); // 注意显示右子树
  root.left = des_post(arr);
  return root;
}

/* soluiton 2 前序遍历 */
// 序列化
var serialize_pre = function (root) {
  let res = [];
  ser_pre(root, res);
  console.log('res:', res);
  return res.join(',');
};
var ser_pre = (root, res) => {
  if (!root) {
    res.push('#');
    return;
  }
  res.push(root.val);
  ser_pre(root.left, res);
  ser_pre(root.right, res);
}

// 反序列化
var deserialize_pre = function (data) {
  let arr = data.split(',');
  return des_pre(arr);
};
var des_pre = (arr) => {
  // 数组的第一个节点是根节点
  let val = arr.shift();
  if (val == '#') return null;
  let root = new TreeNode(val);
  root.left = des_pre(arr);
  root.right = des_pre(arr);
  return root;
}

/* 中序遍历反序列化无法实现 因为无法确定根节点 */

/* solution 3 层级遍历解法 反序列化待补充 */
var serialize = function (root) {
  if (!root) return '';
  let level = [root], res = [];
  ser_level(level, res);
  return res.join(',');
};
var ser_level = (level, res) => {
  let n = level.length;
  if (n == 0) return;
  let node;
  for (let i = 0; i < n; i++) {
    node = level.shift();
    if (node) {
      level.push(node.left);
      level.push(node.right);
      res.push(node.val);
    } else {
      res.push('#');
    }
  }
  ser_level(level, res);
}

// 反序列化
var deserialize = function (data) {
  if (data == '') return null;
  let arr = data.split(',');
  let root = new TreeNode(arr[0]);
  let roots = [root]; // 存储根节点 每一个根节点对应两个子节点
  for (let i = 1; i < arr.length;) {
    let parent = roots.shift();
    // 找到左节点
    if (arr[i] != '#') {
      parent.left = new TreeNode(arr[i]);
      roots.push(parent.left);
    } else {
      parent.left = null;
    }
    i++;
    // 找到右节点
    if (arr[i] != '#') {
      parent.right = new TreeNode(arr[i]);
      roots.push(parent.right);
    } else {
      parent.right = null;
    }
    i++;
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

