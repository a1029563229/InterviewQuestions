# console.log 是同步还是异步? 如何实现一个 console.log？

`console.log` 内部实现是 `process.stdout`，将输入的内容打印到 `stdout`，异步同步取决于 `stdout` 连接的数据流的类型（需要写入的位置）以及不同的操作系统。
  - 文件：在 Windows 和 POSIX 上是同步的；
  - TTY（终端）：在 Windows 上是异步的，在 POSIX 上是同步；
  - 管道（和 socket）：在 Windows 上是同步的，在 POSIX 上是异步的；

造成这种差异的原因是因为一些历史遗留问题，不过这个问题并不会影响正常的输出结果。