function myNew(fn) {
  const newObj = Object.create(fn.prototype);
  result = fn.apply(newObj, [...arguments].slice(1));
  return typeof result === "object" ? result : newObj;
}

function Foo(a, b) {
  this.a = a;
  this.b = b;
}

function Bar(x, y) {
  this.x = x;
  this.y = y;
  return this;
}

foo = myNew(Foo, 1, 2);
console.log(foo);

bar = myNew(Bar, 1, 2);
console.log(bar);