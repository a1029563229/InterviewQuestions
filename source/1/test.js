Function.prototype.MyCall = function (context) {
  const args = [...arguments].slice(1);

  context.fn = this;

  const result = context.fn(...args);
  delete context.fn;

  return result;
}

Function.prototype.MyApply = function (context) {
  const args = arguments[1] || [];

  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;

  return result;
}

Function.prototype.MyBind = function (context) {
  const args = [...arguments].slice(1);

  return function () {
    context.MyApply(context, args);
  }
}

function sayHello(param1, param2) {
  console.log({ a: this.a });
  console.log({ param1 });
  console.log({ param2 });
}

const obj = {
  a: 1,
  sayHello
}

const obj2 = {
  a: 3,
  sayHello
}

obj.sayHello.MyCall(obj2, 1, 2, 3);
obj2.sayHello.MyApply(obj, [1, 2, 3]);
const bindSayHello = obj.sayHello.bind(obj2, 1, 2, 3);
bindSayHello();