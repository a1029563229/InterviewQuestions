function fn() {
  a = 1;
}

fn();

var b = 10;

console.log(a);
console.log(this.a);
console.log(global.a);

console.log(b);
console.log(this.b);
console.log(global.b);