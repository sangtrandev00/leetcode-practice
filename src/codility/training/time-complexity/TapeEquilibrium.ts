function sum(array: number[]): number {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}



// Understand wrong the issue
export function wrongSolution(A: number[]): number {
    const map = new Map()

    let left = A[0]
    let right = sum(A.slice(1))
    let max = Math.abs(left - right)
    map.set(1, max)

    for (let i = 2; i < A.length; i++) {
        left = left + A[i - 1]
        right = right - A[i - 1]
        map.set(i, Math.abs(left - right))
        max = Math.max(Math.abs(left - right), max)
    }

    for (const [key, value] of map.entries()) {
        if (value == max) {
            return key
        }
    }

    return 1

};

export function solution(A: number[]): number {
    const totalSum = A.reduce((acc, val) => acc + val, 0); // Total sum of the array
    let leftSum = 0;
    let rightSum = totalSum;
    let minDifference = Infinity;

    for (let i = 0; i < A.length - 1; i++) {
        leftSum += A[i]; // Đây là quy luật
        rightSum -= A[i]; // Đây là quy luật
        const difference = Math.abs(leftSum - rightSum);
        minDifference = Math.min(minDifference, difference);
    }

    return minDifference;
}


console.log(solution([3, 1, 2, 4, 3]));