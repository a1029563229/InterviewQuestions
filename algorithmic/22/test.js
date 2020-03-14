/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if ((num >= 1000 && num < 10000) || (num >= 10 && num < 100) || num === 100000) {
      count++;
    }
  }
  return count;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));