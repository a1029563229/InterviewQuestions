/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var anagramMappings = function(A, B) {
	const C = [];
	const m = new Map();
	for (let i = 0; i < B.length; i++) {
		m.set(B[i], i);
	}

	for (let i = 0; i < A.length; i++) {
		C.push(m.get(A[i]));
	}

	return C;
};