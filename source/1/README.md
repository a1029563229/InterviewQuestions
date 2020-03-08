# 手写 bind、call、apply

```js
Function.prototype.MyCall = function (context) {
  const args = [...arguments].slice(1);

  context.fn = this;

  const result = context.fn(...args);
  delete context.fn;

  return result;
}

Function.prototype.MyApply = function (context) {
  const args = arguments[1] || [];

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;

  return result;
}

Function.prototype.MyBind = function (context) {
  const args = [...arguments].slice(1);

  return function () {
    context.MyApply(context, args);
  }
}
```