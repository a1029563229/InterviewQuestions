# 怎么让一个 div 水平垂直居中？

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
<!-- 1 -->
div.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

<!-- 2 -->
div.parent {
  position: relative;
}
div.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

<!-- 3 -->
div.parent {
  display: grid;
}
div.child {
  justify-self: center;
  align-self: center;
}

<!-- 4 -->
div.parent {
  font-size: 0;
  text-align: center;
  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
    vertical-align: middle;
  }
}
div.child {
  display: inline-block;
  vertical-align: middle;
}
```