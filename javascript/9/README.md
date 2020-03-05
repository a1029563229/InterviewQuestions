# （头条、微医）Async/Await 如何通过同步的方式实现异步

`Async/Await` 是一个自执行的 `generate` 函数。利用 `generate` 函数的特性把异步的代码写成“同步”的形式。

```js
var fetch = require("node-fetch");

function *gen() { // 这里的 * 可以看成 async
  var url = "https://api.github.com/users/github";
  var result = yield fetch(url); // 这里的 yield 可以看成 await
  console.log(result.bio);
}

var g = gen();
var result = g.next();
result.value.then(data => data.json()).then(data  => g.next(data));
```