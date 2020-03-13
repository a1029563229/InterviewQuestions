# （挖财）什么是防抖和节流？有什么区别？如何实现？

## 防抖

触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间。

```js
function debounce(fn, timing) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, timing);
  }
}
```

## 节流

高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行效率。

```js
function throttle(fn, timing) {
  let trigger;
  return function() {
    if (trigger) return;
    trigger = true;
    fn();
    setTimeout(() => {
      trigger = false;
    }, timing);
  }
}
```

> Tips：我记这个很容易把两者弄混，总结了个口诀，就是 DTTV（Debounce Timer Throttle Variable - 防抖靠定时器控制，节流靠变量控制）。