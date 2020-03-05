function convert(obj) {
  return Array.from({ length: 12 }).map((item, index) => obj[index] || null).slice(1);
}

console.log(convert({ 1: 222, 2: 123, 5: 888 }));