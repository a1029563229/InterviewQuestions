/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
	const m = grid[0].length;
	const n = grid.length;
	let ans = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (grid[i][j] < 0) {
				ans += (m - j);
				break;
			}
		}
	}
	return ans;
};


console.log(countNegatives([
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[1, 1, -1, -2],
	[-1, -1, -2, -3]
]));