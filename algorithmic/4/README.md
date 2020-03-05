# 请分别用深度优先思想和广度优先思想实现一个拷贝函数？

## 深度优先拷贝函数

```js
function DFSdeepClone(val, visitedArr = []) {
  let clone_val;
  const type = getType(val);
  switch (type) {
    case 'Array':
      if (visitedArr.indexOf(val) > -1) {
        clone_val = val;
        break;
      }

      visitedArr.push(val)
      clone_val = [];
      for (let i = 0; i < val.length; i++) {
        clone_val[i] = DFSdeepClone(val[i], visitedArr);
      }
      break;
    case 'Object':
      if (visitedArr.indexOf(val) > -1) {
        clone_val = val;
        break;
      }

      visitedArr.push(val)
      clone_val = {};
      for (let key in val) {
        clone_val[key] = DFSdeepClone(val[key], visitedArr);
      }
      break;
    default:
      clone_val = val;
      break;
  }
  return clone_val;
}
```