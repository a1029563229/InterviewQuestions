# 简单介绍一下 IPC

IPC（Inner-Process Communication）又称进程间通信技术，是用于 Node 内部父子进程之间进行通信的方法。

Node 的 IPC 是通过不同平台的管道技术实现的，特点是本地网络通信，速度快，效率高。

Node 在启动子进程的时候，主进程先建立 IPC 通道，然后将 IPC 通道的 fd（文件描述符）通过环境变量（NODE_CHANNEL_FD）的方式传递给子进程，然后子进程通过 fd 与 父进程建立 IPC 连接。