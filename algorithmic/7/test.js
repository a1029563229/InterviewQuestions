function generateRandomArr(len) {
  const arr = new Array(len);
  arr.fill();
  return arr.map(() => Math.round(Math.random() * 100));
}

function reFlatten() {
  const sortArr = [];
  let arr = generateRandomArr(10);
  arr.sort((a, b) => a - b);
  arr = [...new Set(arr)];
  for (let i = 0; i < arr.length; i++) {
    const n = Math.floor(arr[i] / 10);
    sortArr[n] = sortArr[n] || [];
    sortArr[n].push(arr[i]);
  }
  return sortArr.filter(item => item);
}

console.log(reFlatten());