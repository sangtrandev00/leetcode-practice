export function solution(A: number[]): number {
    A.sort((a, b) => a - b)
    const setItem = new Set(A) // O(n)

    let result = 0;
    while (setItem.has(result)) {
        result++
    }

    return result;
};

