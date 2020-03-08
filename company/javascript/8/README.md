# （腾讯）webpack 中 loader 和 plugin 的区别是什么？

loader：loader 是一个转换器，将 A 文件进行编译成 B 文件，属于单纯的文件转换过程；

plugin：plugin 是一个扩展器，它丰富了 webpack 本身，针对是 loader 结束后，webpack 打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听 webpack 打包过程中的某些节点，执行广泛的任务。