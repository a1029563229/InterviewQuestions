/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
	let i = 3;
	while (Math.floor((num + Math.pow(10, i) * 3) / Math.pow(10, i)) % 9 !== 0) {
		i--;
	}
	return num + Math.pow(10, i) * 3
};

console.log(maximum69Number(9669));