export function solution(N: number): number {

    // Implement your solution here
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