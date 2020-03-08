# 为什么 Node.js 不给每一个.js文件以独立的上下文来避免作用域被污染?

Nodejs 模块正常情况下对作用域不会造成污染（模块函数内执行），意外创建全局变量是一种例外，可以采用严格模式来避免。

```js
function fn() {
  a = 1;
}

fn();

var b = 10;

console.log(a); // 1
console.log(this.a); // undefined
console.log(global.a); // 1 意外的全局上下文污染

console.log(b); // 10
console.log(this.b); // undefined
console.log(global.b); // undefined
```