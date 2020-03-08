# 聊聊 redux-thunk 是如何实现异步 action 的？

在 `redux-thunk` 中会判断 `action` 的类型，如果 `action` 的类型为函数，则执行该 `action` 函数，并且将 `dispatch` 作为参数，将自身的 `dispatch` 操作延迟到 `action` 函数中执行，由 `action` 函数决定何时（可能是异步操作后）执行 `dispatch`.