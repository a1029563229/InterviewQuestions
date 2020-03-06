# CSS3 新增伪类有那些？（例如 nth-child）

- elem:nth-child(n): 选中父元素下的第 n 个标签名为 elem 的元素；
- elem:nth-last-child(n): 作用同上，从后开始查找；
- elem:last-child：最后一个子元素
- elem:only-child：如果 elem 是父元素下唯一的子元素，则选中；
- elem:nth-of-type(n)：选择父元素下第 n 个 elem 类型元素；
- elem:empty：选中不包含子元素和内容的 elem 类型元素；
- :not(elem)：选择非 elem 元素的每个元素；
- :enabled：启用状态的表单组件