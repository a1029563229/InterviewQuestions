function random1(arr) {
  return arr.sort(() => Math.random() - .5);
}

function random2(arr) {
  const cArr = [...arr];
  const newArr = [];
  while (cArr.length) {
    const index = Math.floor(Math.random() * cArr.length);
    newArr.push(cArr[index]);
    cArr.splice(index, 1);
  }
  return newArr;
}

function random3(arr) {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    const index = Math.floor(Math.random() * (l - i)) + i;
    const temp = arr[index];
    arr[index] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(random1(arr));
console.log(random2(arr));
console.log(random3(arr));