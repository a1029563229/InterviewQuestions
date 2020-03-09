function test() { 
  process.nextTick(() => test());
}

test();