
// Pass 8 testcase!
export function solution(P: number[], S: number[]): number {
    // Implement your solution here
    // Tìm tổng số người ở xe P
    // So sánh tổng số lượng ghế S
    const sumP = P.reduce((acc, curr) => acc + curr, 0) // O(n)
    const sumS = S.reduce((acc, curr) => acc + curr, 0) // O(n)
    if (sumP > sumS) return -1 // O(1)

    S.sort((a, b) => b - a) // O(n log n)
    let sum = 0;
    for (let i = 0; i < S.length; i++) {
        sum += S[i]
        if (sum >= sumP) {
            return i + 1
        }
    }
    // O(n)
    return P.length
}

// Big(O) => n log n

solution([7], [6])