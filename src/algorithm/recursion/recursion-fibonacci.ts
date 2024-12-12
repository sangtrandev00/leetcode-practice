// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8


export function fibonacciIterative(n: number) {
    if (n < 0) return -1
    if (n == 0) return 0
    if (n == 1) return 1

    let i = 2;
    let first = 0;
    let second = 1;
    let sum = 1;
    while (i <= n) {
        sum = first + second // 1, 2, 3, 5, 8
        first = second // 1, 1, 2, 3, 5
        second = sum // 1, 2, 3, 5, 8
        i++ // 3, 4, 5, 6, 7
    }
    return sum

}

console.log('fibonacciIterative(6)', fibonacciIterative(100));


export function fibonacciRecursive(n: number): number {

    // Điểm dừng
    if (n < 0) return -1
    if (n == 0) return 0
    if (n <= 2) return 1
    n--

    return fibonacciRecursive(n) + fibonacciRecursive(n - 1)
}
// Ta có quy luật như sau: f(n) = f(n-1) + f(n-2). Ví dụ 8 = 5 + 3, 5 = 3 + 2
// Nháp: 
//f(6) => f(5) + f(4) = f(4) + f(3) + f(3) + f(2) = f(3) + f(2)

// console.log("fibonacciRecursive", fibonacciRecursive(10));