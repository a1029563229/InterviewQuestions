/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const arr = [];
    outer: for (let n = left; n <= right; n++) {
        let m = n;
        inner: while (m !== 0) {
            const i = m % 10;
            if (n % i !== 0) {
                continue outer;
            }
            m = Math.floor(m / 10);
        }
        arr.push(n);
    }
    return arr;
};