/*
 * @lc app=leetcode id=284 lang=javascript
 *
 * [284] Peeking Iterator
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator;
  this.curr = null;
};

/**
* @return {number}
*/
PeekingIterator.prototype.peek = function () {
  if (this.curr == null) {
    this.curr = this.iterator.next();
  }
  // this.curr 不为空 相当于连续两次调用 peek 函数
  return this.curr;
};

/**
* @return {number}
*/
PeekingIterator.prototype.next = function () {
  if (this.curr != null) {
    let res = this.curr;
    this.curr = null;
    return res;
  }
  return this.iterator.next();
};

/**
* @return {boolean}
*/
PeekingIterator.prototype.hasNext = function () {
  return this.curr || this.iterator.hasNext();
};

/**
* Your PeekingIterator object will be instantiated and called as such:
* var obj = new PeekingIterator(arr)
* var param_1 = obj.peek()
* var param_2 = obj.next()
* var param_3 = obj.hasNext()
*/
// @lc code=end

