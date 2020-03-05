# 数组编程题

随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。

```js
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
```