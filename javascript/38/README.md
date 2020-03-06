# 简述 Flux 思想

Flux 最大的特点就是，数据单向流动
  1. 用户访问 View
  2. View 发出用户的 Action
  3. Dispatcher 收到 Action，要求 Store 进行对应的更新；
  4. Store 更新后，发出一个 “change” 事件；
  5. View 收到 “change” 后，更新页面；