const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length;
  if (len <= 1) return len;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];
    if (current === next) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeDuplicates(nums));
console.log(nums);