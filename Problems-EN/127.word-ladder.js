/*
 * @lc app=leetcode id=127 lang=javascript
 *
 * [127] Word Ladder
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// 广度优先搜索 先对单词做预处理
var ladderLength = function (beginWord, endWord, wordList) {
  if (beginWord == '' || endWord == '' || wordList.length == 0 || !wordList.includes(endWord)) return 0;
  // 单词预处理 记录所有单词的通用模式以及每种通用模式对应的单词列表
  let dict = {};
  for (let word of wordList) {
    for (let i = 0; i < word.length; i++) {
      let key = word.slice(0, i) + '*' + word.slice(i + 1);
      if (dict.hasOwnProperty(key)) {
        dict[key].push(word);
      } else {
        dict[key] = [word];
      }
    }
  }
  // 广度优先遍历 层次遍历
  // 访问过的节点不再访问 不然树会无限增长
  let queue = [beginWord], visited = { beginWord: true }, res = [0];
  // 如果找到目标值 res会被更新
  helper(queue, visited, dict, 1, res, endWord);
  return res[0];
}

// 判断两个单词之间是否只差一个字母
var helper = (queue, visited, dict, level, res, endWord) => {
  // 递归结束条件
  // 下一层没有节点
  if (queue.length == 0) return;

  let len = queue.length, beginWord;
  for (let k = 0; k < len; k++) {
    beginWord = queue.shift();
    
    for (let i = 0; i < beginWord.length; i++) {
      // 对于给定的单词 找到该单词的所有通用模式
      let pattern = beginWord.slice(0, i) + '*' + beginWord.slice(i + 1);

      // 找到该模式下的所有未访问的单词 将其加入queue
      if (dict.hasOwnProperty(pattern)) {
        let words = dict[pattern];
        for (let j = 0; j < words.length; j++) {
          if (words[j] == endWord) {
            res[0] = level + 1; // 找到目标值 更新最短路径 找到即可返回
            return;
          }
          if (!visited[words[j]]) {
            visited[words[j]] = true;
            queue.push(words[j]);
          }
        }
      }
    }
  }
  helper(queue, visited, dict, level + 1, res, endWord);
}

let a = 'hot', b = 'dog';
let list = ["hot", "dog"];
let res1 = ladderLength(a, b, list);
// console.log('res1:', res1);
// @lc code=end

