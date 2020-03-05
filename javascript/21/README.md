# call 和 apply 的区别是什么，哪个性能更好一些

1. `Function.prototype.apply` 和 `Function.prototype.call` 的作用是一样的，区别在于传入参数的不同；
2. 第一个参数都是指定函数体内 `this` 的指向；
3. 第二个参数开始不同，`apply` 是传入带下标的集合，数组或者类数组，`apply` 把它传给函数作为参数，`call` 从第二个开始传入的参数是不固定的，都会传给函数作为参数；
4. `call` 比 `apply` 的性能要好，`call` 传入参数的格式正式内部所需要的格式；