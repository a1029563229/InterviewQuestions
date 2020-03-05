# 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

1. display: none - 不占空间，不能点击，会引起回流，子元素不影响
2. visibility: hidden - 占据空间，不能点击，引起重绘，子元素可设置 visible 进行显示
3. opacity: 0 - 占据空间，可以点击，引起重绘，子元素不影响