# 介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的

1. 当修改了一个或多个文件；
2. 文件系统接收更改并通知 webpack；
3. webpack 重新编译构建一个或多个模块，并通知 `HMR（Hot Module Replacement）` 服务器进行更新；
4. `HMR Server` 使用 `Websocket` 通知 `HMR runtime` 需要更新，`HMR runtime` 通过 HTTP 请求更新 jsonp；
5. `HMR runtime` 替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新；