/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const dictionaries = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    const base = 'a'.charCodeAt(0);
    const s = new Set();
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let mw = "";
        for (let j = 0; j < word.length; j++) {
            const code = word.charCodeAt(j);
            mw += dictionaries[code - base];
        }
        s.add(mw);
    }
    return s.size;
};