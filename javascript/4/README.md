# ['1', '2', '3'].map(parseInt) what & why ?

`['1', '2', '3'].map(parseInt)` 的输出结果为 [1, NaN, NaN]。

因为 `parseInt(string, radix)` 将一个字符串 `string` 转换为 `radix` 进制的整数， `radix` 为介于 `2-36` 之间的数。

在数组的 `map` 方法的回调函数中会传入 `item（遍历项）` 和 `index（遍历下标)` 作为前两个参数，所以这里的 `parseInt` 执行了对应的三次分别是
  - parseInt(1, 0)
  - parseInt(2, 1)
  - parseInt(3, 2)

对应的执行结果分别为 `1、NaN、NaN`。