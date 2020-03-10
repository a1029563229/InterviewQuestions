# 什么是 CSP？

CSP（Content-Security-Policy）指的是内容安全策略，它的本质是建立一个白名单，告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截由浏览器自己来实现。

通常有两种方式来开启 CSP，一种是设置 HTTP 首部中的 Content-Security-Policy，一种是设置 meta 标签的方式 `<meta http-equiv="Content-Security-Policy">`

CSP 也是解决 XSS 攻击的一个强力手段。