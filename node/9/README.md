# 简单聊聊 Node 的异步 I/O

在进程启动时，Node 便会创建一个类似于 while(true) 的循环，每执行一次循环体的过程成为 Tick。每个 Tick 的过程就是查看是否有事件待处理，如果有，就取出事件及其相关的回调函数。如果存在关联的回调函数，就执行它们。然后进入下个循环，如果不再有事件处理，就退出进程。（每一次 Tick 都会把观察者中可执行的事件执行完毕后，再进行下一次的 Tick）

事件循环是一个典型的生产者/消费者模型。异步I/O、网络请求等则是事件的生产者，生产出的事件被传递到对应的观察者，事件循环从观察者取出事件并处理（消费者）。

```js
// 简易型 tick

const events = [];

function observer() {
  setInterval(() => {
    console.log('checking...')
    if (events.length > 0) {
      const event = events.shift();
      event();
    }
  }, 50);
}

const fn = () => {
  console.log('event callback');
}

setInterval(() => {
  events.push(fn);
}, 500);

observer();
```

## Node 内部的异步 I/O 流程

1. 发起异步调用
2. 封装异步执行对象，设置回调函数和参数
3. 将异步执行对象推入线程池（主线程继续往下执行）
4. （一段时间后）异步执行对象执行完毕，将执行后的结果连同线程一起交还给主线程；
5. 主线程的 Tick 检测到有执行完成的异步任务，将执行对象取出，执行对应的回调函数；
6. 完成