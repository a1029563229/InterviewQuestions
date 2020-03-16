/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
	let ans = 0;
	for (let i = 0; i < points.length - 1; i++) {
		const current = points[i];
		const next = points[i + 1];
		const dx = Math.abs(next[0] - current[0]);
		const dy = Math.abs(next[1] - current[1]);
		ans += Math.max(dx, dy);
	}
	return ans;
};

console.log(minTimeToVisitAllPoints([
	[1, 1],
	[3, 4],
	[-1, 0]
]))