# react 组件的生命周期

## 初始化阶段

1. constructor(): 用于绑定事件，初始化 state
2. componentWillMount()：组件将要挂载，在 render 之前调用，可以在服务端调用。
3. render()：用作渲染 dom；
4. componentDidMount()：在 render 之后，而且是所有子组件都 render 之后才调用。

## 更新阶段

1. getDerivedStateFromProps：getDerivedStateFromProps 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。它应返回一个对象来更新 state，如果返回 null 则不更新任何内容；
2. componentWillReceiveProps(nextProps): 在这里可以拿到即将改变的状态，可以在这里通过 setState 方法设置 state
3. shouldComponentUpdate(nextProps, nextState): 他的返回值决定了接下来的声明周期是否会被调用，默认返回 true
4. componentWillUpdate(): 不能在这里改变 state，否则会陷入死循环
5. componentDidUpdate(): 和componentDidMount()类似，在这里执行 Dom 操作以及发起网络请求

## 析构阶段

1. componentWillUnmount()：主要执行清除工作，比如取消网络请求，清除事件监听。