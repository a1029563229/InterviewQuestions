# 双向绑定和 vuex 是否冲突

当在严格模式中使用 `Vuex` 时，在属于 `Vuex` 的 `state` 上使用 `v-model` 会导致出错。

解决方案：

1. 给 `<Input>` 中绑定 value，然后侦听 `input` 或者 `change` 事件，在事件回调中调用一个方法；
2. 使用带有 `setter` 的双向绑定计算属性；