# 简述浏览器与 Node 的事件循环

## 浏览器

- 宏任务：script 中的代码、setTimeout、setInterval、I/O、UI render；
- 微任务：promise、Object.observe、MutationObserver；


## Node

- microTask：微任务；
- nextTick：process.nextTick；
- timers：各类定时器；
- I/O callback：是否有已完成的 I/O 操作的回调函数；
- idle，prepare：仅在内部使用；
- poll：等待新的 I/O 事件；
- check：等待 setImmediate 的回调；
- close callback：关闭所有的 closing handles；


## 区别

- node 环境下的 setTimeout 定时器会依次一起执行，浏览器是一个一个分开的；
- 浏览器环境下微任务的执行是每个宏任务执行之后，而 node 中微任务会在各个阶段执行，一个阶段结束立刻执行 microTask；

浏览器环境下：

```js
while(true){
    宏任务队列.shift()
    微任务队列全部任务()
}
```

Node 环境下：
```js
while(true){
    loop.forEach((阶段)=>{
        阶段全部任务()
        nextTick全部任务()
        microTask全部任务()
    })
}
```
