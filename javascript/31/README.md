# react-router 里的 <Link> 标签和 <a> 标签有什么区别

1. 有 `onClick` 则执行 `OnClick`；
2. 阻止 `a` 标签默认事件（跳转页面）；
3. 在取得跳转 `href`（`to` 属性值），用 history/hash 跳转，此时只是链接发现改变，并没有刷新页面；