function findStr(str, targetStr) {
  if (str.length < targetStr.length) return -1;
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + targetStr.length) === targetStr) return i;
  }
  return -1;
}

console.log(findStr("aalskdjfaljdf", "jfaasdf"));