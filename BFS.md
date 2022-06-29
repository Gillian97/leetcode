## 概述

BFS 的核心思想应该不难理解的，就是把一些问题抽象成图，从一个点开始，向四周开始扩散。一般来说，我们写 BFS 算法都是用「队列」这种数据结构，每次将一个节点周围的所有节点加入队列。

BFS 相对 DFS 的最主要的区别是：BFS 找到的路径一定是最短的，但代价就是空间复杂度可能比 DFS 大很多(why? 是队列存储每一层的节点耗费空间?)

## 算法框架

BFS 算法问题: **本质就是让你在一幅「图」中找到从起点 `start` 到终点 `target` 的最近距离**

```c++
// 计算从起点 start 到终点 target 的最近距离
int BFS(Node start, Node target) {
    Queue<Node> q; // 核心数据结构
    Set<Node> visited; // 避免走回头路
    
    q.offer(start); // 将起点加入队列
    visited.add(start);
    int step = 0; // 记录扩散的步数

    while (q not empty) {
        int sz = q.size();
        /* 将当前队列中的所有节点向四周扩散 */
        for (int i = 0; i < sz; i++) {
            Node cur = q.poll();
            /* 划重点：这里判断是否到达终点 */
            if (cur is target)
                return step;
            /* 将 cur 的相邻节点加入队列 */
            for (Node x : cur.adj()) {
                if (x not in visited) {
                    q.offer(x);
                    visited.add(x);
                }
            }
        }
        /* 划重点：更新步数在这里 */
        step++;
    }
}
```

队列 `q` 就不说了，BFS 的核心数据结构；`cur.adj()` 泛指 `cur` 相邻的节点，比如说二维数组中，`cur` 上下左右四面的位置就是相邻节点；`visited` 的主要作用是防止走回头路，大部分时候都是必须的，但是像一般的二叉树结构，没有子节点到父节点的指针，不会走回头路就不需要 `visited`。

这里注意这个 `while` 循环和 `for` 循环的配合，**`while` 循环控制一层一层往下走，`for` 循环利用 `sz` 变量控制从左到右遍历每一层二叉树节点**：

![img](https://raw.githubusercontent.com/Gillian97/MDImages/main/1.jpeg)

## 111.解决二叉树的最小深度

起点:根节点 终点:最接近根节点的叶子节点

```javascript
// 层次遍历(BFS)
// 找到第一个叶子节点即返回深度,不用再接着找了
var minDepth = function (root) {
  if (!root) return 0;
  const queue = [];
  queue.push(root)
  let depth = 1;
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      // 遍历该层节点 看是否到终点
      if (!cur.left && !cur.right) {
        return depth;
      }
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    // 同一深度的节点遍历完 深度+1
    depth++;
  }
  // 个人觉得总会找到第一个叶子节点 然后直接返回就好 这里不需要return语句
  // return depth
}
```

## 关于 BFS 和 DFS 的 2 个问题

**1、为什么 BFS 可以找到最短距离，DFS 不行吗**？

首先，你看 BFS 的逻辑，`depth` 每增加一次，队列中的所有节点都向前迈一步，这保证了第一次到达终点的时候，走的步数是最少的。

DFS 不能找最短路径吗？其实也是可以的，但是时间复杂度相对高很多。你想啊，DFS 实际上是靠递归的堆栈记录走过的路径，你要找到最短路径，肯定得把二叉树中所有树杈都探索完才能对比出最短的路径有多长对不对？而 BFS 借助队列做到一次一步「齐头并进」，是可以在不遍历完整棵树的条件下找到最短距离的。

形象点说，DFS 是线，BFS 是面；DFS 是单打独斗，BFS 是集体行动。这个应该比较容易理解吧。

**2、既然 BFS 那么好，为啥 DFS 还要存在**？

BFS 可以找到最短距离，但是空间复杂度高，而 DFS 的空间复杂度较低。

还是拿刚才我们处理二叉树问题的例子，假设给你的这个二叉树是满二叉树，节点数为 `N`，对于 DFS 算法来说，空间复杂度无非就是递归堆栈，最坏情况下顶多就是树的高度，也就是 `O(logN)`。

但是你想想 BFS 算法，队列中每次都会储存着二叉树一层的节点，这样的话最坏情况下空间复杂度应该是树的最底层节点的数量，也就是 `N/2`，用 Big O 表示的话也就是 `O(N)`。

由此观之，BFS 还是有代价的，**一般来说在找最短路径的时候使用 BFS，其他时候还是 DFS 使用得多一些（主要是递归代码好写）**。

## 752.打开密码锁的最少次数

```javascript
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
```

## 199.二叉树的右视图

```javascript
var rightSideView = function (root) {
  if (!root) return []
  const queue = [root]
  const sideList = []
  while (queue.length > 0) {
    const n = queue.length
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (i === n - 1) {
        sideList.push(cur.val)
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
  }
  return sideList;
};
```

## 515.在每个树行中找最大值

```javascript
var largestValues = function (root) {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length > 0) {
    const n = queue.length
    let levelMax = null;
    for (let i = 0; i < n; i++) {
      const cur = queue.shift()
      if (levelMax === null) {
        levelMax = cur.val
      }
      levelMax = Math.max(levelMax, cur.val)
      if (i === n - 1) {
        res.push(levelMax)
      }
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    levelMax = null;
  }
  return res;
};
```

