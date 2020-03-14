/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let n1 = 1, n2 = 0;
  while (n) {
    const m = n % 10;
    n1 *= m;
    n2 += m;
    n = Math.floor(n / 10);
  }

  return n1 - n2;
};

console.log(subtractProductAndSum(234));