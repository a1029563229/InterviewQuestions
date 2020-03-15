/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	const matrix = new Array(n).fill(null).map(() => []);
	const pow = n * n;
	let t = 0, r = n - 1, b = n - 1, l = 0, m = 0;
	while (m < pow) {
		for (let i = l; i <= r; i++)  matrix[t][i] = ++m;
		t++;
		for (let i = t; i <= b; i++)  matrix[i][r] = ++m;
		r--;
		for (let i = r; i >= l; i--)  matrix[b][i] = ++m;
		b--;
		for (let i = b; i >= t; i--)  matrix[i][l] = ++m;
		l++;
	}
	return matrix;
};

console.log(generateMatrix(5));