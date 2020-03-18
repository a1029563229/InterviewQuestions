/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	const m = {};
	for (let i = 0; i < nums.length; i++) {
		const n = nums[i];
		if (!m[n]) m[n] = 0;
		m[n]++; 
	}
	for (let key in m) {
		if (m[key] === 1) return +key;
	}
};

console.log(singleNumber([9,1,7,9,7,9,7]));