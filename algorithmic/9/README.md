# 实现一个字符串匹配算法，从长度为 n 的字符串 S 中，查找是否存在字符串 T，T 的长度是 m，若存在返回所在位置。

```js
function findStr(str, targetStr) {
  if (str.length < targetStr.length) return -1;
  let cStr = str;
  let tLen = targetStr.length;
  let i = 0;
  while(cStr.length > 0) {
    if (cStr.slice(0, tLen) === targetStr) {
      return i;
    }
    cStr = cStr.slice(1);
    i++;
  }
  return -1;
}
```