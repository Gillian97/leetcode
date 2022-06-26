/*
 * @lc app=leetcode id=126 lang=javascript
 *
 * [126] Word Ladder II
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
// 与127相似 只是这次需要保存所有的最短路径
var findLadders = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord) || beginWord == '' || endWord == '') return [];

  // 对每个单词进行预处理
  let dict = {};
  for (let i = 0; i < wordList.length; i++) {
    let word = wordList[i];
    for (let j = 0; j < word.length; j++) {
      let pattern = word.slice(0, j) + '*' + word.slice(j + 1);
      if (dict.hasOwnProperty(pattern)) {
        dict[pattern].push(word);
      } else {
        dict[pattern] = [word];
      }
    }
  }
  // 广度优先遍历 BFS 找到下一层单词
  let res = [], path = [], visited = { beginWord: true }, minStep = [0];
  let queue = [beginWord];
  bfs(queue, res, path, dict, endWord, visited);

  console.log('res======', res);
  return res;
};

// 如何保存路径
var bfs = (queue, dict, visited) => {
  if (depth > minStep[0] && minStep[0] != 0) return;

  let n = queue.length, beginWord;
  for (let i = 0; i < n; i++) {
    beginWord = queue.shift();
    // path.push(beginWord);
    // 该单词的所有通用模式
    for (let j = 0; j < beginWord.length; j++) {
      let pattern = beginWord.slice(0, j) + '*' + beginWord.slice(j + 1);
      if (!dict.hasOwnProperty(pattern)) continue;
      // 该模式对应的所有单词
      let words = dict[pattern];
      for (let word of words) {
        // 找到最后一个单词
        // if (word == endWord) {
        //   path.push(endWord);
        //   if (res.length == 0 || res.length > 0 && path.length == res[res.length - 1].length) {
        //     res.push(path.slice());
        //     return;
        //   } else {
        //     return true;
        //   }
        // }

        if (!visited[word]) {
          visited[word] = true;
          queue.push(word); // 下一层的单词
        }
      }
    }
  }
  bfs(queue, res, path, dict, endWord, visited);
}

var dfs = ()=>{

}

let beginWord1 = "hit", endWord1 = "cog";
let wordList1 = ["hot", "dot", "dog", "lot", "log", "cog"]
findLadders(beginWord1, endWord1, wordList1);
// @lc code=end

