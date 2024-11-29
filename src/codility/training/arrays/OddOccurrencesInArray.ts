


export function solution(A: number[]): number {

    const map = new Map()
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            map.set(A[i], map.get(A[i]) + 1)
        } else {
            map.set(A[i], 1)
        }
    }

    for (const [key, value] of map) {
        if (value % 2 !== 0) {
            return key
        }
    }

    return map.keys().next().value

}