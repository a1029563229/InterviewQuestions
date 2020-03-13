/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  const absN = n % s.length;
  if (n === 0 || !absN) return s;

  let newS = "";
  for (let i = absN; i < s.length + absN; i++) {
    const index = i % s.length;
    newS += s.charAt(index);
  }
  return newS;
};

console.log(reverseLeftWords("abcdefg", 2))
console.log(reverseLeftWords("lrloseumgh", 6))