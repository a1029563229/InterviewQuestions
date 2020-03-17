/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
var calculateTime = function(keyboard, word) {
	const m = new Map();
	for (let i = 0; i < keyboard.length; i++) {
		m.set(keyboard[i], i);
	}
	let ans = m.get(word.charAt(0));
	for (let i = 1; i < word.length; i++) {
		const w = word[i];
		ans += (Math.abs(m.get(w) - m.get(word[i - 1])));
	}
	return ans;
};

console.log(calculateTime("abcdefghijklmnopqrstuvwxyz", "cba"));