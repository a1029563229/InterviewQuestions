// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  return n && n + sumNums(n - 1);
};

console.log(sumNums(5));