# （携程）算法手写题
已知如下数组：

`var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];`

编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

```js
// 思路型
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

// API 型
function flatten2(arr) {
  return Array.from(new Set(arr.flat(Infinity))).sort((a, b) => a - b);
}
```