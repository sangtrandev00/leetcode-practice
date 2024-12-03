// Brute foce approach
export function solution(A: number[]): number {
    let max = -Infinity; // Initialize with the smallest possible value
    for (let i = 0; i < A.length; i++) {
        let sum = 0;
        for (let j = i; j < A.length; j++) {
            sum += A[j]
            max = Math.max(max, sum)
        }
    }

    return max
};

// Timeout with large dataset