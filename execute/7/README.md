# 下面代码输出什么？

```js
var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log(obj)
```
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>








输出：[,,1,2] length 为 4

解释：`Array.prototype.push` 将根据 `length` 将元素填充到对应位置并修改 `length` 属性 +1，所以输出的结果就是上述结果。