# Node 如何实现热更新？

Node 中有一个 api 是 `require.cache`，如果这个对象中的引用被清楚后，下次再调用就会重新加载，这个机制可以用来热加载更新的模块。

```js
function clearCache(modulePath) {
  const path = require.resolve(modulePath);
  if (require.cache[path]) {
    require.cache[path] = null;
  }
}
```

然后使用 `fs.watchFile` 监听文件的更改，文件更改后调用 `clearCache` 传入对应的模块名即可。

使用 `pm2 reload` 也可以实现暴力热更新，它会保证在新的实例重启成功后才会把旧的进程杀死，可以保持服务一直能够响应，服务能够一直保证在可响应状态。