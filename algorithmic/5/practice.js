var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatten(arr) {
  let flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      flattenArr = flattenArr.concat(flatten(item))
    } else {
      if (flattenArr.indexOf(item) > -1) continue;
      flattenArr.push(item);
    }
  }
  return flattenArr.sort((a, b) => a - b);
}

function flatten2(arr) {
  return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}

console.log(flatten(arr));
// console.log(flatten2(arr));