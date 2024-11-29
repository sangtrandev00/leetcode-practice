
export function solution(A: number[]): number {
    // Implement your solution here

    const sortedArray = A.sort((a, b) => a - b).filter((x) => x > 0)
    if (sortedArray.length == 0) return 1

    const setItemArray = [...new Set(sortedArray)]
    for (let i = 1; i <= setItemArray.length; i++) {
        if (i < setItemArray[i - 1]) {
            return i
        }
    }

    return sortedArray[sortedArray.length - 1] + 1

}


export function betterSolutionbetterSolution(A: number[]): number {
    // Implement your solution here

    const setItem = new Set(A) // O(n)

    let missMin = 1;
    while (setItem.has(missMin)) {
        missMin++
    }

    return missMin

}