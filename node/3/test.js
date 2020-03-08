function test() {
  let n = { a: 1 };
  return {
    add: () => { console.log(n); return ++n.a },
    release: () => { n = null }
  }
}

const fn = test();
console.log(fn.add());
console.log(fn.add());
console.log(fn.add());
console.log(fn.add());
console.log(fn.add());
fn.release();
console.log(fn.add());