
// 50%
export function solution(N: number): number {

    // O(n) ở trường hợp này rất lớn < 1.000.000.000) VD: 1.010.101.010 
    // For ở trong trường hợp này có thể lên đến 10 triệu lần!
    while (true) {
        N++
        const string = N.toString()
        let flag = true;

        // O(n)
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

// O(n2)

// Gần có ý tưởng bài này rồi!
export function betterSolution(N: number): number {

    // Handle special case like 9,99,999,9999 (corner case)
    if (N == 9) return 10
    if (N % 10 == 9) {
        N++
    }

    const string = N.toString()
    let result = ''

    // O(n) n ở đây cũng rất nhỏ (<= 12)
    for (let i = 1; i < string.length; i++) {
        if (string[i] == string[i - 1]) {
            const number = Number(string[i]) + 1
            const rest = string.slice(i + 1) // O(m): m ở đây rất nhỏ <= 10
            result = string.slice(0, i) + number + convertString(rest) // O(m) + O(1) + 3O(m)
            return Number(result) // O(m)
        }
    }
    return N + 1 // Thuật toán này tốt

};

function convertString(string: string) {
    // O(m) + O(m) + O(m)
    return string.split('').map((_, index) => {
        return index % 2 == 0 ? 0 : 1
    }).join('')
}

betterSolution(1222222)