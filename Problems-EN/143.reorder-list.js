/*
 * @lc app=leetcode id=143 lang=javascript
 *
 * [143] Reorder List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head) return null
    if (!head.next) return head
    // 使用快慢指针将链表对半分
    // 将后一部分链表进行翻转
    // 再将前后部分拼接即可
    let slow = fast = head;
    let pre; // 左边链表的end
    while (fast) {
        // 这里需要注意的是
        // 先判断 再后移
        // 不然总是会报null没有next属性的问题
        if (!fast.next) { // 链表长度为奇数
            pre = slow;
            slow = slow.next;
            break;
        } else if (!fast.next.next) { // 链表长度为偶数
            fast = fast.next;
            pre = slow;
            slow = slow.next;
            break;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    // slow fast 定位准确

    // 翻转没有问题
    let rever = reverse(slow);
    // 此时最开始的slow仍然是pre.next
    // 修改 pre.next 为 null
    pre.next = null;

    // 将将部分的链表进行拼接
    // pre 标志第一部分链表的末尾
    let curr = head;
    while (curr != pre) {
        let c = curr.next, r = rever.next;
        curr.next = rever;
        rever.next = c;
        curr = c;
        rever = r;
    }
    // 第一部分链表的长度是大于等于第二部分的
    // 所以当第一部分链表到达末尾时
    // 检查第二部分链表末尾是否为null
    // 如果是null,则拼接结束
    // 不是null, 则需要再将该rever拼接至head的末尾
    if (rever) {
        curr.next = rever;
    }
    return head;
};

// 翻转链表还需要再熟悉下
var reverse = (start) => {
    let rever = new ListNode(null);
    let nex, nextStart;
    while (start) {
        nex = rever.next;
        nextStart = start.next;
        rever.next = start;
        start.next = nex;
        start = nextStart;
    }
    return rever.next;
}
// @lc code=end

