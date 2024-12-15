
let calculations = 0
function fibonacci(n: number): number {
    calculations++
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

// console.log(fibonacci(10))
// console.log("calculation", calculations);

// Việc tính như vậy khá lâu, và không tối ưu (Caching)
function dp() {
    const caching: any = new Map()
    caching.set(0, 0)
    caching.set(1, 1)
    return function fibonacciDP(number: number): number {
        calculations++
        if (caching.has(number)) {
            return caching.get(number)
        } else {
            const result = fibonacciDP(number - 1) + fibonacciDP(number - 2)
            caching.set(number, result)
            console.log("caching!", caching);
            return result
        }
    }
}

const fib = dp()
console.log("slow", fibonacci(20)); // 13529 lần gọi function => Tốn rất nhiều bộ nhớ khi sử dụng recursive function! => Rất dễ gây nghẽn (exceed bộ nhớ!)
console.log("fast", fib(20)); // 39 lần gọi function => Super fast

// Performance testing
// console.time("fib(20) - First Call");
// console.log("fib(20)", fib(20));
// console.timeEnd("fib(20) - First Call");

// console.time("fib(20) - Second Call");
// console.log("fib(20)", fib(20));
// console.timeEnd("fib(20) - Second Call");

// console.time("fib(19)");
// console.log("fib(19)", fib(19));
// console.timeEnd("fib(19)");

// console.time("fib(21)");
// console.log("fib(21)", fib(21));
// console.timeEnd("fib(21)");

// console.time("fib(21)");
// console.log("fib(21)", fib(21));
// console.timeEnd("fib(21)");

// console.time("fib(30)");
// console.log("fib(30)", fib(30));
// console.timeEnd("fib(30)");

// console.time("fib(30)");
// console.log("fib(30)", fib(30));
// console.timeEnd("fib(30)");

console.log("calculations", calculations);