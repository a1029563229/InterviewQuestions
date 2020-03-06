# instanceof 的实现原理

```js
while (x.__proto__) {
  if (x.__proto__ === y.prototype) {
    return true;
  }
  x.__proto__ = x.__proto__.__proto__;
}
if (x.__proto__ === null) {
  return false;
}
```