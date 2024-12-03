export function solution(P: number[], S: number[]): number {
    // Implement your solution here
    // Tìm tổng số người ở xe P
    // So sánh tổng số lượng ghế S
    const sumP = P.reduce((acc, curr) => acc + curr, 0)
    const sumS = S.reduce((acc, curr) => acc + curr, 0)
    if (sumP > sumS) return -1

    S.sort((a, b) => b - a)
    let sum = 0;
    for (let i = 0; i < S.length; i++) {
        sum += S[i]
        if (sum >= sumP) {
            return i + 1
        }
    }
    return P.length
}

solution([7], [6])