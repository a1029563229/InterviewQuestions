/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
	let A = [];
	A.push(S[0]);
	for (let i = 1; i < S.length; i++) {
		const c = S[i];
		let ALen = A.length;
		let B = [];
		for (let j = 0; j < ALen; j++) {
			const s = A[j];
			let n = 0;
			while(n <= s.length) {
				B.push(s.slice(0, n) + c + s.slice(n));
				n++;
			}
		}	
		A = B;
	}
	return A;
};

console.log(permutation("abc"));