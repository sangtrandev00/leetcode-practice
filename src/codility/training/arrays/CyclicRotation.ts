export function solution(A: number[], K: number): number[] {

    // Trường hợp K > A.length thì sao ?
    if (K % A.length === 0) {
        return A
    }

    K = K % A.length

    if (K == 0) return A

    for (let i = 0; i < K; i++) {
        let temp = A[0]
        A[0] = A[A.length - 1]
        for (let j = 1; j < A.length; j++) {
            let temp2 = A[j]
            A[j] = temp;
            temp = temp2
        }

    }
    return A
};

export function betterSolution(A: number[], K: number): number[] {

    // Trường hợp K > A.length thì sao ?
    // trường hợp K = A. Là luỹ thừa của A
    // Trường hợp K < A
    if (K % A.length === 0) {
        return A
    }

    K = K % A.length // K luôn luôn < A

    if (K == 0) return A

    const array = A.slice(-K).concat(A.slice(0, A.length - K))

    return array
};

solution([3, 8, 9, 7, 6], 3)