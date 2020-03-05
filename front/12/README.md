# （兑吧）情人节福利题，如何实现一个 new

```js
function _new(fn, ...args) {
  let obj = Object.create(fn.prototype);
  let ret = fn.apply(obj, args);
  return ret instanceof Object ? ret : obj;
}
```