# 聊聊 Redux 的源码实现

Redux 实现的原理就是创建了一个状态中心（state），通过纯函数来对状态中心的数据进行修改，然后将修改后的结果以发布订阅的方式通知到所有订阅者，从而达到一个共享状态的效果。

Redux 的核心是函数式编程，使用无副作用的同步函数 `action` 来触发 `reducer` 对数据进行修改。

Redux 的创建函数是 `createStore`，这个函数的作用是创建一个 `store` 对象，其中关键步骤是
  1. 将 `reducer` 利用闭包存储在函数内；
  2. 导出了 `subscribe` 函数，`subscribe` 函数内部将订阅者添加到一个订阅者列表中，等待通知；
  3. 导出了 `dispatch` 函数，在 `dispatch` 内部执行了 `reducer` 函数，并将 `action` 作为参数传入到 `reducer` 中；
  4. 将 `reducer` 函数的返回结果（新的 `state`）存在 `currentState` 中，同时通知所有的订阅者 `state` 已经更新；
  5. 订阅者可以通过 `getState` 得到最新的 `state`；

Redux 中间件的原理就是 `Decorator 装饰器模式`，将中间件经过一些装饰器（中间件）装饰以后，返回一个`增强型`的 `dispatch`。