/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
// dfs 记录访问过的节点
var cloneGraph1 = function (node) {
  let lookup = {};
  var dfs = (node) => {
    if (!node) return;
    if (lookup.hasOwnProperty(node.val)) return lookup[node.val];
    let clone = new Node(node.val, []);
    lookup[node.val] = clone;
    for (let i of node.neighbors) {
      clone.neighbors.push(dfs(i));
    }
    return clone;
  }
  return dfs(node);
};

// bfs
var cloneGraph = function (node) {
  if (!node) return null;
  let visited = {};
  let queue = [node];
  visited[node.val] = new Node(node.val, []);
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let i of curr.neighbors) {
      if (!visited.hasOwnProperty(i.val)) {
        visited[i.val] = new Node(i.val, []);
        queue.push(i);
      }
      visited[curr.val].neighbors.push(visited[i.val]);
    }
  }
  return visited[node.val];
};
// @lc code=end

