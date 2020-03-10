/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  return num % 2 
    ? 1 + numberOfSteps(num - 1)
    : 1 + numberOfSteps(num / 2)
};

console.log(numberOfSteps(14));