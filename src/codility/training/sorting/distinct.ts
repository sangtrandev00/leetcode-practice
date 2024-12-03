export function solution(A: number[]): number {
    if (A.length == 0) return 0

    A.sort((a, b) => a - b)

    let count = 1;

    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] != A[i + 1]) {
            count++
        }
    }
    return count

};

export function solution2(A: number[]): number {
    if (A.length == 0) return 0
    const set = new Set(A)
    return set.size

};

