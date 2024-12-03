export function solution(A: number[]): number {
    if (A.length < 3) return 0
    A.sort((a, b) => a - b)
    const negativeArray = A.filter((x) => x < 0)
    if (negativeArray.length < 2) {
        return A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
    }
    return Math.max(negativeArray[0] * negativeArray[1] * A[A.length - 1], A[A.length - 1] * A[A.length - 2] * A[A.length - 3])
};

solution([-3, 1, 2, -2, 5, 6])