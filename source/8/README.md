# 简单聊聊 new Vue 以后发生的事情

1. `new Vue` 会调用 Vue 原型链上的 `_init` 方法对 Vue 实例进行初始化；
2. 首先是 `initLifecycle` 初始化生命周期，对 Vue 实例内部的一些属性（如 children、parent、isMounted）进行初始化；
3. `initEvents`，初始化当前实例上的一些自定义事件（Vue.$on）；
4. `initRender`，解析 `slots` 绑定在 Vue 实例上，绑定 `createElement` 方法在实例上；
5. 完成对生命周期、自定义事件等一系列属性的初始化后，触发生命周期钩子 `beforeCreate`；
6. `initInjections`，在初始化 `data` 和 `props` 之前完成依赖注入（类似于 React.Context）；
7. `initState`，完成对 `data` 和 `props` 的初始化，同时对属性完成数据劫持内部，启用监听者对数据进行监听（更改）；
8. `initProvide`，对依赖注入进行解析；
9. 完成对数据（state 状态）的初始化后，触发生命周期钩子 `created`；
10. 进入挂载阶段，将 vue 模板语法通过 `vue-loader` 解析成虚拟 DOM 树，虚拟 DOM 树与数据完成双向绑定，触发生命周期钩子 `beforeMount`；
11. 将解析好的虚拟 DOM 树通过 vue 渲染成真实 DOM，触发生命周期钩子 `mounted`；