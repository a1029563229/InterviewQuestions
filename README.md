# 吾日三省吾身

## 导读

推荐阅读顺序：

* HTML 篇
* CSS 篇
* Javascript 篇
* 函数执行结果（考察知识点掌握）
* 源码相关
* 网络相关
* 设计模式
* 算法相关
* Nodejs 篇
* 未解答问题（无答案）
* 大厂面试题

### HTML 篇

- [页面导入样式时，使用 link 和 @import 有什么区别。](https://github.com/a1029563229/InterviewQuestions/blob/master/html/1)
- [常见浏览器内核](https://github.com/a1029563229/InterviewQuestions/blob/master/html/2)
- [简述浏览器的渲染原理](https://github.com/a1029563229/InterviewQuestions/blob/master/html/3)
- [HTML5 的 form 的自动完成功能是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/html/4)
- [如何实现浏览器内多个标签页之间的通信？](https://github.com/a1029563229/InterviewQuestions/blob/master/html/5)
- [简述前端性能优化](https://github.com/a1029563229/InterviewQuestions/blob/master/html/6)
- [什么是 webp](https://github.com/a1029563229/InterviewQuestions/blob/master/html/7)

<h3 id="#1.2">CSS 篇</h2>

- [介绍下 BFC 及其应用](https://github.com/a1029563229/InterviewQuestions/blob/master/css/1)
- [怎么让一个 div 水平垂直居中](https://github.com/a1029563229/InterviewQuestions/blob/master/css/2)
- [介绍下重绘和回流（Repaint & Reflow），以及如何进行优化](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/13)
- [分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景](https://github.com/a1029563229/InterviewQuestions/blob/master/css/3)
- [简述 CSS 盒模型](https://github.com/a1029563229/InterviewQuestions/blob/master/css/4)
- [简述 Rem 及其转换原理](https://github.com/a1029563229/InterviewQuestions/blob/master/css/5)
- [移动端视口配置](https://github.com/a1029563229/InterviewQuestions/blob/master/css/6)
- [简述伪类和伪元素](https://github.com/a1029563229/InterviewQuestions/blob/master/css/7)
- [行内元素的 margin 和 padding](https://github.com/a1029563229/InterviewQuestions/blob/master/css/8)
- [CSS 中哪些属性可以继承？](https://github.com/a1029563229/InterviewQuestions/blob/master/css/9)
- [CSS3 新增伪类有那些？（例如 nth-child）](https://github.com/a1029563229/InterviewQuestions/blob/master/css/10)
- [用纯 CSS 创建一个三角形](https://github.com/a1029563229/InterviewQuestions/blob/master/css/11)
- [min-width/max-width 和 min-height/max-height 属性间的覆盖规则？](https://github.com/a1029563229/InterviewQuestions/blob/master/css/12)

### Javascript 篇

- [Vue 的响应式原理中 Object.defineProperty 有什么缺陷？为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/2)
- [（滴滴、饿了么）写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/3)
- [['1', '2', '3'].map(parseInt) what & why ?](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/4)
- [（挖财）什么是防抖和节流？有什么区别？如何实现？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/5)
- [介绍下 Set、Map、WeakSet 和 WeakMap 的区别？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/6)
- [ES5/ES6 的继承除了写法以外还有什么区别？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/7)
- [setTimeout、Promise、Async/Await 的区别](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/8)
- [（头条、微医）Async/Await 如何通过同步的方式（形式）实现异步](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/9)
- [简述一下 Generator 函数](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/10)
- [（滴滴、挖财、微医、海康）JS 异步解决方案的发展历程以及优缺点。](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/11)
- [简述浏览器缓存读取规则](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/15)
- [为什么 Vuex 的 mutation 和 Redux 的 reducer 中不能做异步操作？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/16)
- [（京东）下面代码中 a 在什么情况下会打印 1？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/17)
- [在 Vue 中，子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的。](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/18)
- [实现一个 sleep 函数](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/19)
- [双向绑定和 vuex 是否冲突](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/20)
- [call 和 apply 的区别是什么，哪个性能更好一些](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/21)
- [为什么通常在发送数据埋点请求的时候使用的是 1x1 像素的透明 gif 图片？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/22)
- [（百度）实现 (5).add(3).minus(2) 功能](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/23)
- [操作题（考察数组基础）](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/24)
- [操作题（考察消息队列）](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/25)
- [箭头函数与普通函数（function）的区别是什么？构造函数（function）可以使用 new 生成实例，那么箭头函数可以吗？为什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/26)
- [redux 为什么要把 reducer 设计成纯函数](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/27)
- [ES6 代码转成 ES5 代码的实现思路是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/28)
- [Vue 的父组件和子组件生命周期钩子执行顺序是什么](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/30)
- [react-router 里的 Link 标签和 a 标签有什么区别](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/31)
- [vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/32)
- [谈谈对 MVC、MVP、MVVM 模式的理解](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/33)
- [简单说说 js 中有哪几种内存泄露的情况](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/34)
- [跨域问题如何解决](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/35)
- [instanceof 的实现原理](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/36)
- [react 组件的生命周期](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/37)
- [简述 Flux 思想](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/38)
- [简述执行上下文和执行栈](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/39)
- [简述浏览器与 Node 的事件循环](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/40)
- [什么是 CSP？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/41)
- [什么是 CSRF 攻击？如何防范 CSRF 攻击？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/42)
- [谈一谈你理解的函数式编程？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/43)
- [什么是尾调用，使用尾调用有什么好处？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/44)
- [Vue 组件间如何通信？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/45)
- [Vue 中 computed 和 watch 的差异？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/46)
- [简述一下 PWA](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/47)
- [介绍下 CacheStorage](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/1)
- [Vue 双向数据绑定原理](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/2)
- [页面的可用性时间的计算](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/3)
- [简述一下 WebAssembly](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/4)
- [谈谈移动端点击](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/5)
- [谈谈 Git-Rebase](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/6)
- [简述懒加载](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/7)
- [webpack 中 loader 和 plugin 的区别是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/8)


### 函数执行结果

- [第一题（考察 This 指针）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/1)
- [第二题（考察对象应用）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/2)
- [第三题（考察事件循环/异步）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/3)
- [第四题（考察 React 的使用）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/4)
- [第五题（考察作用域）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/5)
- [第六题（考察作用域）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/6)
- [第七题（考察数组）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/7)
- [第八题（考察赋值表达式）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/8)
- [第九题（考察赋值表达式）](https://github.com/a1029563229/InterviewQuestions/blob/master/execute/9)

### 源码相关

- [如何实现函数的柯里化？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/1)
- [手写 bind、call、apply](https://github.com/a1029563229/InterviewQuestions/blob/master/source/1)
- [模拟 new 的实现](https://github.com/a1029563229/InterviewQuestions/blob/master/source/2)
- [请使用 Proxy + Fetch 实现类似于 axios 的基础 API](https://github.com/a1029563229/InterviewQuestions/blob/master/source/4)
- [手写 Promise](https://github.com/a1029563229/InterviewQuestions/blob/master/source/5)
- [聊聊 Redux 的源码实现](https://github.com/a1029563229/InterviewQuestions/blob/master/source/6)
- [聊聊 redux-thunk 是如何实现异步 action 的？](https://github.com/a1029563229/InterviewQuestions/blob/master/source/7)
- [简单聊聊 new Vue 以后发生的事情](https://github.com/a1029563229/InterviewQuestions/blob/master/source/8)
- [介绍下 webpack 热更新原理，是如何做到在不刷新浏览器的前提下更新页面的](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/29)
- [简述一下 React 的源码实现](https://github.com/a1029563229/InterviewQuestions/blob/master/source/9)

### 网络相关

- [HTTP1.0 和 HTTP1.1 有什么区别？](https://github.com/a1029563229/InterviewQuestions/blob/master/network/1)
- [（网易）简单讲解一下 http2 的多路复用](https://github.com/a1029563229/InterviewQuestions/blob/master/network/2)
- [介绍 HTTPS 握手过程](https://github.com/a1029563229/InterviewQuestions/blob/master/network/3)
- [HTTPS 握手过程中，客户端如何验证证书的合法性](https://github.com/a1029563229/InterviewQuestions/blob/master/network/4)
- [介绍下如何实现 token 加密](https://github.com/a1029563229/InterviewQuestions/blob/master/network/5)
- [介绍下 HTTPS 中间人攻击](https://github.com/a1029563229/InterviewQuestions/blob/master/network/6)
- [说出几个你知道的 HTTP 状态码及其功能](https://github.com/a1029563229/InterviewQuestions/blob/master/network/7)
- [从输入URL到页面加载的全过程](https://github.com/a1029563229/InterviewQuestions/blob/master/network/8)
- [简述 HTTP2.0 与 HTTP1.1 相较于之前版本的改进](https://github.com/a1029563229/InterviewQuestions/blob/master/network/9)
- [SSL 连接断开后如何恢复？](https://github.com/a1029563229/InterviewQuestions/blob/master/network/10)
- [什么是 CDN 服务？](https://github.com/a1029563229/InterviewQuestions/blob/master/network/11)

### 设计模式

- [什么是设计模式？设计模式如何解决复杂问题？](https://github.com/a1029563229/InterviewQuestions/blob/master/designPattern/1)
- [什么是白箱复用和黑箱复用？](https://github.com/a1029563229/InterviewQuestions/blob/master/designPattern/3)
- [介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/14)
- [简述面向对象的设计原则](https://github.com/a1029563229/InterviewQuestions/blob/master/designPattern/2)
- [简述你了解的设计模式及应用场景](https://github.com/a1029563229/InterviewQuestions/blob/master/designPattern/4)

### 算法相关

- [选择排序](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/37)
- [使用迭代的方式实现 flatten 函数](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/2)
- [介绍下深度优先遍历和广度优先遍历，如何实现？](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/3)
- [（携程）编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/5)
- [给定两个数组，写一个方法来计算它们的交集](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/6)
- [数组编程题](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/7)
- [如何把一个字符串的大小写取反（大写变小写小写变大写），例如 ’AbC' 变成 'aBc' 。](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/8)
- [实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/9)
- [算法题「旋转数组」](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/10)
- [（京东、快手）周一算法题之「两数之和」](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/13)
- [（bilibili）编程算法题](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/14)
- [（阿里巴巴）如何实现数组的随机排序？](https://github.com/a1029563229/InterviewQuestions/blob/master/company/algorithmic/1)
- [将数字变成 0 的操作次数](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/23)
- [实现 Trie (前缀树)](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/24)
- [朋友圈](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/18)
- [解压缩编码列表](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/19)
- [整数的各位积和之差](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/20)
- [猜数字](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/21)
- [统计位数为偶数的数字](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/22)
- [交换数字](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/25)
- [删除链表中的节点](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/26)
- [子集[sku]](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/27)
- [螺旋矩阵 II](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/28)
- [IP 地址无效化](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/29)
- [二进制链表转整数](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/30)
- [反转链表](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/31)
- [删去字符串中的元音](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/32)
- [找出变位映射](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/33)
- [TinyURL 的加密与解密](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/34)
- [访问所有点的最小时间](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/35)
- [无重复字符串的排列组合](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/36)
- [统计有序矩阵中的负数](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/38)
- [链表中倒数第k个节点](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/39)
- [单行键盘](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/40)
- [二叉树的深度](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/41)
- [打印从1到最大的n位数](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/42)
- [数组中数字出现的次数 II](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/43)
- [单词频率](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/44)
- [替换空格](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/45)
- [分割平衡字符串](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/46)
- [删除中间节点](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/47)
- [从尾到头打印链表](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/48)
- [反转链表](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/49)
- [6 和 9 组成的最大数字](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/50)
- [最小元素各数位之和](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/51)
- [最小元素各数位之和](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/51)

### 正则相关

- [检测邮箱格式合法性](https://github.com/a1029563229/InterviewQuestions/blob/master/regexp/1)

### Nodejs 篇

- [介绍一下 Node 里的模块是什么?](https://github.com/a1029563229/InterviewQuestions/blob/master/node/1)
- [请介绍一下 require 的模块加载机制](https://github.com/a1029563229/InterviewQuestions/blob/master/node/2)
- [请介绍一下 Node 中的内存泄露问题和解决方案](https://github.com/a1029563229/InterviewQuestions/blob/master/node/3)
- [在 Node 中两个模块互相引用会发生什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/4)
- [Node 如何实现热更新？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/5)
- [为什么 Node.js 不给每一个.js文件以独立的上下文来避免作用域被污染?](https://github.com/a1029563229/InterviewQuestions/blob/master/node/6)
- [Node 更适合处理 I/O 密集型任务还是 CPU 密集型任务？为什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/7)
- [聊一聊 Node 的垃圾回收机制](https://github.com/a1029563229/InterviewQuestions/blob/master/node/8)
- [简单聊聊 Node 的异步 I/O](https://github.com/a1029563229/InterviewQuestions/blob/master/node/9)
- [Node 如何创建子进程？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/10)
- [进程当前的工作目录是什么？有什么作用？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/11)
- [console.log 是同步还是异步? 如何实现一个 console.log？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/12)
- [父进程或子进程的死亡是否会影响对方? 什么是孤儿进程?](https://github.com/a1029563229/InterviewQuestions/blob/master/node/13)
- [简单介绍一下 IPC](https://github.com/a1029563229/InterviewQuestions/blob/master/node/14)
- [什么是守护进程？Node 如何实现守护进程？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/15)
- [简单介绍一下 Buffer](https://github.com/a1029563229/InterviewQuestions/blob/master/node/16)
- [简单介绍一下 Stream](https://github.com/a1029563229/InterviewQuestions/blob/master/node/17)
- [什么是粘包问题，如何解决？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/18)
- [cookie 与 session 的区别? 服务端如何清除 cookie?](https://github.com/a1029563229/InterviewQuestions/blob/master/node/19)
- [hosts 文件是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/node/20)

### 消息队列

- [消息队列的应用场景有哪些？](https://github.com/a1029563229/InterviewQuestions/blob/master/msgQ/1)

### 未解答问题

- [请分别用深度优先思想和广度优先思想实现一个拷贝函数？](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/4)
- [实现 React Hooks 中的 useState 和 useEffect](https://github.com/a1029563229/InterviewQuestions/blob/master/source/10)
- [（阿里巴巴）快速排序](https://github.com/a1029563229/InterviewQuestions/blob/master/company/algorithmic/2)
- [（阿里巴巴）反转链表](https://github.com/a1029563229/InterviewQuestions/blob/master/company/algorithmic/3)

### 大厂面试题

- [（bilibili）编程算法题](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/14)
- [（携程）编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/5)
- [（阿里巴巴）介绍下深度优先遍历和广度优先遍历，如何实现？](https://github.com/a1029563229/InterviewQuestions/blob/master/algorithmic/3)
- [（网易）简单讲解一下 http2 的多路复用](https://github.com/a1029563229/InterviewQuestions/blob/master/network/2)
- [（挖财）什么是防抖和节流？有什么区别？如何实现？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/5)
- [（头条、微医）Async/Await 如何通过同步的方式实现异步](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/9)
- [（滴滴、挖财、微医、海康）JS 异步解决方案的发展历程以及优缺点。](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/11)
- [（兑吧）情人节福利题，如何实现一个 new](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/12)
- [（京东）下面代码中 a 在什么情况下会打印 1？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/17)
- [（百度）实现 (5).add(3).minus(2) 功能](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/23)
- [（滴滴、饿了么）写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/3)
- [（阿里巴巴）简述执行上下文和执行栈](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/39)
- [（阿里巴巴）Vue 组件间如何通信？](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/45)
- [（阿里巴巴）简述前端性能优化](https://github.com/a1029563229/InterviewQuestions/blob/master/html/6)
- [（阿里巴巴）如何实现数组的随机排序？](https://github.com/a1029563229/InterviewQuestions/blob/master/company/algorithmic/1)
- [（阿里巴巴）介绍下 CacheStorage](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/1)
- [（阿里巴巴）Vue 双向数据绑定原理](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/2)
- [（阿里巴巴）页面的可用性时间的计算](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/3)
- [（阿里巴巴）简述一下 WebAssembly](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/4)
- [（阿里巴巴）谈谈移动端点击](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/5)
- [（阿里巴巴）谈谈 Git-Rebase](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/6)
- [（阿里巴巴）简述懒加载](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/7)
- [（腾讯）webpack 中 loader 和 plugin 的区别是什么？](https://github.com/a1029563229/InterviewQuestions/blob/master/company/javascript/8)
- [（阿里巴巴）谈谈对 MVC、MVP、MVVM 模式的理解](https://github.com/a1029563229/InterviewQuestions/blob/master/javascript/33)

