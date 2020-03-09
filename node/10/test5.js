function test() { 
  setTimeout(() => test(), 0);
}

test();