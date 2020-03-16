/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function(S) {
	return S.replace(/a|e|i|o|u/g, "");
};

console.log(removeVowels("leetcodeisacommunityforcoders"));