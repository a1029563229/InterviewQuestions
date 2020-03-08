# 模拟 new 的实现

```js
function myNew(fn) {
  const newObj = Object.create(fn.prototype);
  result = fn.apply(newObj, [...arguments].slice(1));
  return typeof result === "object" ? result : newObj;
}
```