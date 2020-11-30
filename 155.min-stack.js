/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
// 需要一个辅助栈 存储每个元素入栈时的最小值
var MinStack = function() {
  this.stack = [];
  this.minStack = [Infinity];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  this.stack.push(x);
  let len = this.minStack.length;
  this.minStack.push(Math.min(x, this.minStack[len-1]));
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this.minStack.pop();
  return this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length-1];
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/
// @lc code=end

