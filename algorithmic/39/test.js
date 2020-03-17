/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
	let fast = head;
	while (fast) {
		fast = fast.next;
		if (k === 0) {
			head = head.next;
		} else {
			k--;
		}
	}
	return head;
};