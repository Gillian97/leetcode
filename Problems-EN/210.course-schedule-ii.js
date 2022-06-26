/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// 找出一种拓扑排序, 没有则返回空
var findOrder = function (numCourses, prerequisites) {
  // 对图进行处理
  let graph = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  // 记录入度
  let arr = new Array(numCourses).fill(0);
  for (let e of prerequisites) {
    graph[e[1]].push(e[0]);
    arr[e[0]]++;
  }
  // 将入度为 0 的节点放入队列, 不管先后顺序
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (arr[i] == 0) queue.push(i);
  }
  let visited = [];
  while (queue.length) {
    let node = queue.shift();
    visited.push(node);
    for (let i of graph[node]) {
      arr[i]--;
      if (arr[i] == 0) queue.push(i);
    }
  }
  return visited.length == numCourses ? visited : [];
};
// @lc code=end

