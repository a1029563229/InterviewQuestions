function convert(str) {
  let convertStr = "";
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    if (code >= 97) {
      convertStr += String.fromCharCode(code - 32);
    } else {
      convertStr += String.fromCharCode(code + 32);
    }
  }
  return convertStr;
}

console.log(convert("AbC"));