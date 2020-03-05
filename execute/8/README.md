# 下面代码会输出什么？

```js
var a = {n: 1};
var b = a;
a.x = a = {n: 2};

console.log(a.x) 	
console.log(b.x)
```

















输出

1. `{n:2}`

2. `undefined`