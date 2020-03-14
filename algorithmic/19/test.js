/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
  const newNums = [];
  for (let i = 0; i < nums.length; i += 2) {
    let freq = nums[i];
    const val = nums[i + 1];
    while (freq) {
      freq--;
      newNums.push(val);
    }
  }

  return newNums;
};

console.log(decompressRLElist([1, 2, 3, 4]));