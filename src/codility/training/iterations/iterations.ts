
export function triangle(number: number): string {
    let string = ``
    // Implement your solution here
    for (let i = 1; i <= number; i++) {
        for (let j = 0; j < i; j++) {
            string += '*'
        }
        if (i < number) {
            string += '\n'
        }
    }
    return string;
}

export function triangleSymmetrical(number: number): string {
    let string = ``
    // Implement your solution here
    for (let i = number; i > 0; i--) {

        const indented = number - i;
        for (let j = 0; j < indented; j++) {
            string += ' '
        }

        const asterisks = 2 * i - 1;
        for (let i = 0; i < asterisks; i++) {
            string += '*'
        }
        if (i > 1) {
            string += '\n'
        }
    }

    return string
}

export function fibonacci(number: number): string {
    // Implement your solution here

    let string = ``

    let a = 0;
    let b = 1;
    string = `${a},${b}`
    let i = 0;
    while (i < number - 2) {
        let c = a + b;
        a = b;
        b = c;
        string += `,${c}`
        i++
    }

    return string
}

console.log(fibonacci(8));
// console.log(`*\n**\n***\n`);