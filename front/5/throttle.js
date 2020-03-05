function throttle(fn, timing) {
  let trigger;
  return function() {
    if (trigger) return;
    trigger = true;
    fn();
    setTimeout(() => {
      trigger = false;
    }, timing);
  }
}

function foo() {
  console.log('foo');
}

let tFoo = throttle(foo, 500);

tFoo();
tFoo();
setTimeout(() => {
  tFoo();
  tFoo();
}, 300);