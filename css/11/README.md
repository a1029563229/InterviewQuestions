# 用纯 CSS 创建一个三角形

```css
#demo {
  width: 0;
  height: 0;
  border-width: 20;
  border-style: "solid";
  border-color: transparent transparent red transparent;
}
```

原理是相邻边框连接处是均分的原理。