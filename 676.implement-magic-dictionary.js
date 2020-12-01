/*
 * @lc app=leetcode id=676 lang=javascript
 *
 * [676] Implement Magic Dictionary
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
  this.dict = {}
};

/** 
* @param {string[]} dictionary
* @return {void}
*/
MagicDictionary.prototype.buildDict = function (dictionary) {
  // 将相同长度的字符串合并为数组形式, 存储在同一键值下
  for (let d of dictionary) {
    if (this.dict.hasOwnProperty(d.length)) {
      this.dict[d.length].push(d);
    } else {
      this.dict[d.length] = [d];
    }
  }
};

/** 
* @param {string} searchWord
* @return {boolean}
*/
MagicDictionary.prototype.search = function (searchWord) {
  let n = searchWord.length;
  if (!this.dict.hasOwnProperty(n)) return false;
  let words = this.dict[n];
  for (let word of words) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      if (word[i] != searchWord[i]) count++;
    }
    if (count == 1) return true;
  }
  return false;
};

/**
* Your MagicDictionary object will be instantiated and called as such:
* var obj = new MagicDictionary()
* obj.buildDict(dictionary)
* var param_2 = obj.search(searchWord)
*/
// @lc code=end

