
// 50%
export function solution(N: number): number {

    while (true) {
        N++
        const string = N.toString()
        let flag = true;

        for (let i = 0; i < string.length - 1; i++) {
            if (string[i] == string[i + 1]) {
                flag = false
                break;
            }
        }

        if (flag == true) {
            return Number(string)
        }
    }

};

// Gần có ý tưởng bài này rồi!
export function betterSolution(N: number): number {

    // Handle special case like 9,99,999,9999 (corner case)
    if (N == 9) return 10
    if (N % 10 == 9) {
        N++
    }

    const string = N.toString()
    let result = ''

    for (let i = 1; i < string.length; i++) {
        if (string[i] == string[i - 1]) {
            const number = Number(string[i]) + 1
            const rest = string.slice(i + 1)
            result = string.slice(0, i) + number + convertString(rest)
            return Number(result)
        }
    }
    return N + 1

};

function convertString(string: string) {
    return string.split('').map((_, index) => {
        return index % 2 == 0 ? 0 : 1
    }).join('')
}

betterSolution(1222222)