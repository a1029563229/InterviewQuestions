/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function(n) {
	const arr = [];
	const max = Math.pow(10, n);
	for (let i = 1; i < max; i++) {
		arr.push(i);
	}
	return arr;
};

console.log(printNumbers(2));