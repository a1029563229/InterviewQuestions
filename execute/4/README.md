# 请写出下面代码的运行结果

```js
class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};
```




输出

- 0
- 0
- 2
- 3

解答：

1. 第一次和第二次都是在 react 自身声明周期内，触发时 `isBatchingUpdates` 为 `true`，所以并不会直接执行更新 `state`，而是加入了 `dirtyComponents`，所以打印的时获取的都是更新前的状态 0；
2. 两次 `setState`，获取到 `this.state.val` 都是 0，所以执行时都是将 0 设置成 1，在 `react` 内部会被合并掉，只执行一次，设置完成后 `state.val` 值为 1.
3. `setTimeout` 中的代码，触发时 `isBatchingUpdate` 为 `false`，所以能够直接进行更新，所以连着输出 `2、3`