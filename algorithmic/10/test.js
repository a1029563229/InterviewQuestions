function moveRight(arr, n) {
  const movedArr = [];
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    movedArr[i] = arr[Math.abs(-n % l)];
  }
  return movedArr;
}

console.log(moveRight([1, 2, 3, 4, 5, 6, 7], 1));