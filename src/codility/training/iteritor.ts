
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


// console.log(`*\n**\n***\n`);