function computed(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], i);
  }
  for (let i = 0; i < arr.length; i++) {
    const value = map.get(target - arr[i]);
    if (value && value !== i) return [i, value];
  }
}

console.log(computed([2, 7, 11, 15], 22));