# Vue 中 computed 和 watch 的差异？

1. `computed` 是计算一个新的属性，并将该属性挂载到 Vue 实例上，而 `watch` 是监听已经存在且已挂载到 Vue 实例上的数据，所以用 `watch` 同样可以监听 `computed` 计算属性的变化；
2. `computed` 本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 `computed` 值，才会计算新的值。而 `watch` 则是当数据发送变化便会调用执行函数；
3. 从使用场景上来说，`computed` 适用一个数据被多个数据影响，而 `watch` 使用一个数据影响多个数据。