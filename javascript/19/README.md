# 实现一个 sleep 函数

比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

```js
// Promise

function sleep1(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  })
}

sleep1(1000).then(() => console.log("sleep1"));

// Generator

function* sleep2(time) {
  return yield sleep1(time);
}

const s = sleep2(1500);
s.next().value.then(() => console.log("sleep2"));


// Async/Await

async function sleep3(time) {
  await sleep1(time);
}

(async () => {
  await sleep3(2000);
  console.log("sleep3")
})()
```