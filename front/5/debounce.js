function debounce(fn, timing) {
  let timer;
  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, timing);
  }
}

function foo() {
  console.log('foo');
}

let dFoo = debounce(foo, 500);

dFoo();
dFoo();
setTimeout(() => {
  dFoo();
  dFoo();
}, 600);