/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
	let ans = 0;
	let count = 0;
	for (let i = 0; i < s.length; i++) {
		const word = s.charAt(i);
		if (word === 'L') ans++;
		if (word === 'R') ans--;

		if (ans === 0) count++;
	}
	return count;
};

console.log(balancedStringSplit("RLLLLRRRLR"));