/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
// 对于位置 0000 而言,共有四个位置,每个位置可以向上转,也可以向下转,下一步(注意转动一次)可能形成的密码,共有8种可能
// 即对于节点0000而言,可到达的邻居节点共有8个,每个邻居节点又有8个邻居节点
// 采用BFS遍历所有的节点,直到找到target节点,并返回路径(即为最短)
// 可能存在多个节点共用一个邻居节点,因此遍历时需要保留访问过的节点列表
var openLock = function (deadends, target) {
  // queue 中的值都不能出现在deadends中,因为需要可转动(访问)
  // 排除这种特殊情况
  if (target === '0000') return 0;
  if (deadends.includes('0000')) return -1;

  const queue = ['0000'];
  let depth = 0;
  const visited = new Set(deadends.concat('0000'))
  while (queue.length > 0) {
    const n = queue.length;
    for (let i = 0; i < n; i++) {
      const cur = queue.shift();
      // 判断是否是目标节点
      if (target === cur) {
        return depth;
      }
      // 加入当前节点的邻居节点
      for (const neighbour of getNeighbours(cur)) {
        if (visited.has(neighbour)) continue
        queue.push(neighbour)
        visited.add(neighbour)
      }
    }
    depth++;
  }
  return -1;
};

const getNeighbours = (str) => {
  const nextStrList = [];
  for (let i = 0; i < 4; i++) {
    const tempStr = str.split('');
    const nextList = getNextNum(str[i])
    for (const j of nextList) {
      tempStr[i] = j
      nextStrList.push(tempStr.join(''))
    }
  }
  return nextStrList;
}

const getNextNum = (x) => {
  switch (x) {
    case '0':
      return ['1', '9']
    case '9':
      return ['0', '8']
    default:
      return [(+x + 1), (+x - 1)]
  }
}

// const res = getNeighbours('0000')
// const res = openLock(["0201", "0101", "0102", "1212", "2002"], "0202")
// console.log(res);

// @lc code=end

