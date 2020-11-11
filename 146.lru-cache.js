/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 */

// @lc code=start
/**
 * @param {number} capacity
 */
// LRU 缓存策略  Least Recently Used，
// 最近使用过的数据应该是是「有用的」, 很久都没用过的数据应该是无用
// 内存满了就优先删那些很久没用过的数据
// 使用双向链表, 最先使用的节点在链表头, 最久没使用过的在链表尾

// 节点类
class node {
  constructor(key, val, pre, next) {
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.count = 0;
  this.cache = {};
  // 初始化双向链表, 只有头尾节点
  this.head = new node();
  this.tail = new node();
  this.head.next = this.tail;
  this.tail.pre = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.hasOwnProperty(key)) return -1;
  // 将访问的该节点的值移到链表最顶端
  let point = this.cache[key];
  this.moveToHead(point);
  return point.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.hasOwnProperty(key)) {
    let point = this.cache[key];
    point.val = value; // update value
    this.moveToHead(point);
  } else {
    let newNode = new node(key, value);
    // cache 存储的是指针
    this.cache[key] = newNode;
    this.addToHead(newNode);
    this.count++;
    if (this.count > this.capacity) {
      // 删除最后的节点, 让出空间
      delete this.cache[this.tail.pre.key];
      this.removeNode(this.tail.pre)
      this.count--;
    }
  }
};

// 将node节点移动至链表头部
LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next;
  this.head.next.pre = node;
  node.pre = this.head;
  this.head.next = node;
}

// 将node节点移动至链表头部
LRUCache.prototype.moveToHead = function (node) {
  this.removeNode(node);
  this.addToHead(node);
}

LRUCache.prototype.removeNode = function (node) {
  node.pre.next = node.next;
  node.next.pre = node.pre;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

