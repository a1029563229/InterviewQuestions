function intersection(arr1, arr2) {
  let maxArr, minArr;
  if (arr1.length > arr2.length) {
    maxArr = arr1;
    minArr = arr2;
  } else {
    maxArr = arr2;
    minArr = arr1;
  }
  const intersectionArr = [];
  const map = new Map();
  for (let i = 0; i < maxArr.length; i++) {
    map.set(maxArr[i], maxArr[i]);
  }
  for (let i = 0; i < minArr.length; i++) {
    if (map.has(minArr[i])) intersectionArr.push(minArr[i]);
  }
  return intersectionArr;
}

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2))
console.log(intersection(nums2, nums1))