/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let subs = [[]];
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		const subsLen = subs.length;
		for (let j = 0; j < subsLen; j++) {
			subs.push(subs[j].concat(n));
		}
	}
	
	return subs;
};

console.log(subsets([1, 2, 3]));