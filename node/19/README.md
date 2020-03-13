# cookie 与 session 的区别? 服务端如何清除 cookie?

主要区别在于，session 存在服务端，cookie 存在客户端。session 比 cookie 更安全，而且 cookie 不一定一直能用（可能被浏览器禁止）。服务端可以通过设 cookie 的值为空并设置一个及时的 expires 来清除存在客户端上的 cookie。

cookie 可能会包含一些关键信息，而 session 一般都是一个加密串。