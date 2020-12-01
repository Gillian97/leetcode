/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.isEnd = false;
    this.next = {};
  }
}

var WordDictionary = function () {
  this.root = new Trie();
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let w of word) {
    if (!node.next[w]) node.next[w] = new Trie();
    node = node.next[w];
  }
  node.isEnd = true;
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function (word) {
  let node = this.root;
  return this.dfs(word, node, 0);
};

WordDictionary.prototype.dfs = function (word, node, index) {
  for (let i = index; i < word.length; i++) {
    let ch = word[i];
    if (ch == '.') {
      let keys = Object.keys(node.next);
      for (let k of keys) {
        if (this.dfs(word, node.next[k], i + 1)) return true;
      }
      return false;
    }
    if (!node.next[ch]) return false;
    node = node.next[ch];
  }
  // 校验完最后一个字母后 看树中对应的节点是不是结束节点
  return node.isEnd;
}

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/
var obj = new WordDictionary()
obj.addWord('aa')
obj.addWord('ab')
console.log(obj.root.next.a);
/*
 Trie {
  isEnd: false,
  next: {
    a: Trie { isEnd: true, next: {} },
    b: Trie { isEnd: true, next: {} }
  }
}
*/
var param_2 = obj.search('ab');
