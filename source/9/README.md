# 简述一下 React 的源码实现

1. React 的实现主要分为 `Component` 和 `Element`；
2. `Component` 属于 React 实例，在创建实例的过程中会在实例中注册 `state` 和 `props` 属性，还会依次调用内置的生命周期函数；
3. `Component` 中有一个 `render` 函数，`render` 函数要求返回一个 `Element`对象（或 `null`）；
4. `Element` 对象分为原生 `Element` 对象和组件式对象，原生 `Element` + 组件式对象会被一起解析成虚拟 DOM 树，并且内部使用的 `state` 和 `props` 也以 AST 的形式注入到这棵虚拟 DOM 树之中；
5. 在渲染虚拟 DOM 树的前后，会触发 React Component 的一些生命周期钩子函数，比如 `componentWillMount` 和 `componentDidMount`，在虚拟 DOM 树解析完成后将被渲染成真实 DOM 树；
6. 调用 `setState` 时，会调用更新函数更新 `Component` 的 `state`，并且触发内部的一个 `updater`，调用 `render` 生成新的虚拟 DOM 树，利用 diff 算法与旧的虚拟 DOM 树进行比对，比对以后利用最优的方案进行 DOM 节点的更新，这也是 React 单向数据流的原理（与 Vue 的 MVVM 不同之处）。