/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
// 有向无环图(DAG)的拓扑排序
// bfs 先找入度为 0 的节点, 删除其所有边, 再找入度为 0 的点, 以此类推
// 直至节点没有出度停止得到一种拓扑排序或者没有节点入度为零(存在环)
// 能否得到一种拓扑排序
var canFinish = function (numCourses, prerequisites) {
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
  let visited = 0;
  while (queue.length) {
    let node = queue.shift();
    visited++;
    for (let i of graph[node]) {
      arr[i]--;
      if (arr[i] == 0) queue.push(i);
    }
  }
  return visited == numCourses;
};

canFinish(3, [[0, 1], [1, 2]])
// @lc code=end

