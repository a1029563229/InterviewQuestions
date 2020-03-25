/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N === 1) return 1;
    if (N === 0) return 0;
    return fib(N - 1) + fib(N - 2);
};