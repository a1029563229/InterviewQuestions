# 请使用 Proxy + Fetch 实现类似于 axios 的基础 API

```js
const fetch = require("node-fetch");

const axiosOriginal = {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};
const axios = new Proxy(axiosOriginal, {
  set() {
    throw new Error("Can't set any property");
  },

  get(target, name) {
    const method = name.toLocaleUpperCase();
    if (target.methods.indexOf(method) === -1) throw new Error(`Can't support method ${method}`);
    return (url, options) => {
      return fetch(url, {
        method,
        ...options
      }).then(res => res.text())
    }
  }
});

axios.get("http://www.baidu.com").then(res => console.log(res));
axios.post("http://www.baidu.com").then(res => console.log(res));
```