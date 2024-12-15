
// const caching: any = new Map()
// caching.set(2, 2)
// caching.set(3, 3)
// function fibonacciDP(n: number): number {
//     if (n <= 1) return 1
//     if (caching.has(n)) {
//         return caching.get(n)
//     } else {
//         const result = fibonacciDP(n - 1) + fibonacciDP(n - 2)
//         caching.set(n, result)
//         console.log("caching", caching);
//         return result
//     }
// }

// console.log(fibonacciDP(8));

const cachingNumber: any = new Map()
cachingNumber.set(2, 2)
cachingNumber.set(3, 3)
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;

function climbStairs(n: number): number {
    if (n <= 1) return 1
    if (n <= 3) return n
    // Khá giống với tìm số fiboncci
    let i = 3;
    let sum = cachingNumber.get(i - 1) + cachingNumber.get(i - 2);
    while (i < n) {
        sum = cachingNumber.get(i) + cachingNumber.get(i - 1);
        cachingNumber.set(i + 1, sum)
        i++
    }
    return sum;
    // O(n): Time complexity
    // O(n): Space complexity
};

console.log("climbStairs", climbStairs(6));