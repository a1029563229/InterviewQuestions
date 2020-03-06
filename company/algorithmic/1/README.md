# 如何实现数组的随机排序？

```js
// 随机数排序
function random1(arr) {
  return arr.sort(() => Math.random() - .5);
}

// 随机插入排序
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

// 洗牌算法，随机交换排序
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
```