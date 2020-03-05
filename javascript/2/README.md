# Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？

原因如下：

1. `Object.defineProperty` 无法低耗费的监听到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
2. `Object.defineProperty` 只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历。如果属性值是对象，还需要深度遍历。 `Proxy` 可以劫持整个对象， 并返回一个新的对象。
3. `Proxy` 不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。