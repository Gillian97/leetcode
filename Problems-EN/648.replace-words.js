/*
 * @lc app=leetcode id=648 lang=javascript
 *
 * [648] Replace Words
 */

// @lc code=start
/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
class Trie {
  constructor() {
    this.isEnd = false;
    this.next = {};
  }
}

class TrieTree {
  constructor() {
    this.root = new Trie();
  }
  addWord (word) {
    let node = this.root;
    for (let w of word) {
      if (!node.next[w]) node.next[w] = new Trie();
      node = node.next[w];
    }
    node.isEnd = true;
  }
  search (word) {
    let node = this.root;
    for (let w of word) {
      if (!node.next[w]) return false;
      node = node.next[w];
    }
    return node.isEnd;
  }
}

// 将所有词根放入前缀树中, 每个单词来查找最短词根 
var replaceWords = function (dictionary, sentence) {
  let tree = new TrieTree();
  for (let d of dictionary) {
    tree.addWord(d);
  }
  let arr = sentence.split(' ');
  for (let j = 0; j < arr.length; j++) {
    let word = arr[j];
    for (let i = 0; i < word.length; i++) {
      if (tree.search(word.slice(0, i))) {
        arr[j] = word.slice(0, i);
        break;
      }
    }
  }
  return arr.join(' ');
};
// @lc code=end

