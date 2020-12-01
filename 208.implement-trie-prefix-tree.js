/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// 前缀树 又称字典树 单词查询树 非典型的多叉树
// 用于检索字符串数据集中的键 比如搜索引擎中键入关键字时的自动补全
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
// 类似于构建链表
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let w of word) {
    // 考虑到插入前缀相同的单词
    // 比如 app ap 前面的 app 需要保留
    // 因此需要做非空判断
    if (!node[w]) node[w] = {};
    node = node[w];
  }
  node.isEnd = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (let w of word) {
    if (!node[w]) return false;
    node = node[w];
  }
  return node.isEnd == true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (let w of prefix) {
    if (!node[w]) return false;
    node = node[w];
  }
  // 只要匹配前面的部分即可, 是不是末尾单词不用在意
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

