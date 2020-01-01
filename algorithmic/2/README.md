# 使用迭代的方式实现 flatten 函数

```js
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = arr.concat(arr[i])
      arr.splice(i, 1)
    }
  }
  return arr;
}

let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

console.log(flatten(arr))
```