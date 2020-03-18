/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root) return 0;
	
	let deep = 1;
	if (root.left || root.right) {
		deep += Math.max(maxDepth(root.left), maxDepth(root.right));
	}
	return deep;
};