# 如何实现函数的柯里化？

## 什么是函数柯里化？

把接收多个参数的函数变换为接收一个单一参数（最初函数的第一个参数）的函数，并返回接收剩余参数而且返回结果的新函数的技术。

JS 函数柯里化的优点：
- 可以延迟计算，即如果调用柯里化函数传入参数是不调用的，会将参数添加到数组中存储，等到没有参数传入的时候进行调用；
- 参数复用，当在多次调用同一个函数，并且传递的参数绝大多数是相同的，那么该函数可能是一个很好的柯里化候选；

## 怎么实现？

```js
function curringAdd() {
  let args = [].slice.call(arguments, 0);
  
  function add() {
    args = [...args, [].slice.call(arguments, 0)];
    return add
  }
  
  add.toString = function() {
    return args.reduce((t, a) => t + +a, 0);
  }

  return add;
}

console.log(curringAdd(1)(2)(3)) // 6
console.log(curringAdd(1, 2, 3)(4))  // 10
console.log(curringAdd(1)(2)(3)(4)(5)) // 15
console.log(curringAdd(2, 6)(1)) // 9
console.log(curringAdd(1)) // 1
```