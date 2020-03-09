# 简单介绍一下 Stream

流（stream）是 Node 中处理流式数据的抽象接口，`stream` 模块用于构建实现了流接口的对象。

Node 中提供了多种流对象，例如 `HTTP 服务器的请求` 和 `process.stdout`。

流可以是可读的、可写的、或者可读可写的，所有的流都是 `EventEmitter` 的实例。