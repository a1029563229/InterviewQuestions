/**
 * @param {number[]} A
 * @return {number}
 */
var sumOfDigits = function (A) {
	let min = Math.min.apply(null, A);
	let ans = 0;
	while (min) {
		ans += (min % 10);
		min = Math.floor(min / 10);
	}
	return ans % 2 ? 0 : 1;
};

console.log(sumOfDigits([34, 23, 1, 24, 75, 33, 54, 8]));