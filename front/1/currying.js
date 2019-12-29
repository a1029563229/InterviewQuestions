function curringAdd() {
  let args = [].slice.call(arguments, 0);
  
  function add() {
    args = [...args, [].slice.call(arguments, 0)];
    return add
  }
  
  add.toString = function() {
    return args.reduce((t, a) => t + +a, 0);
  }

  return add;
}

console.log(curringAdd(1)(2)(3)) // 6
console.log(curringAdd(1, 2, 3)(4))  // 10
console.log(curringAdd(1)(2)(3)(4)(5)) // 15
console.log(curringAdd(2, 6)(1)) // 9
console.log(curringAdd(1)) // 1