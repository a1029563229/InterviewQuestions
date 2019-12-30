function reverse(n) {
  let s = "";
  if (n == 0) {
    return s;
  }
  const i = n % 10;
  s += reverse((n - i) / 10);
  return i + s;
}

console.log(reverse(1234))