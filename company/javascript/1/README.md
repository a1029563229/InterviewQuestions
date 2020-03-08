# （阿里巴巴）介绍下 CacheStorage

CacheStorage 接口表示 `Cache` 对象的存储。它提供了一个 `ServiceWorker`、其他类型 woker 或者 `window` 范围内可以访问到的所有命名 `cache` 的主目录（它并不是一定要和 `service workers` 一起使用，即使它是在 service workers 规范中定义的），并维护一份字符串名称到相应 `Cache` 对象的映射。

CacheStorage 和 Cache，是两个与缓存相关的接口，用于管理当前网页/Web App 的缓存；在使用 Service Worker 时基本都会用到。它们与数据库有点类似，我们可以用 mongodb 来打个比喻：

- CacheStorage 管理者所有的 Cache，是整个缓存 api 的入口，类似于 mongo；
- Cache 是单个缓存库，通常一个 app 会有一个，类似 mongo 里的每个 db；

无论在 ServiceWorker 域或 window 域下，你都可以用 caches 来访问全局的 CacheStorage。