// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

export function findFactorialRecursive(number: number): number | undefined {
    if (number < 0) return undefined
    // Stop point
    if (number <= 1) return 1
    //code here
    return number * (findFactorialRecursive(number - 1) as number); // Recursive case
    // return when need
}
// VD: 5! = 5 * 4 * 3 * 2 * 1 => 120 = 5 * 4 * 3 * 2 * 1
// Step 1: number = 5 -> return 5 * func(4)
// Step 2: number = 4 -> return 4 * func(3)
// Step 3: number = 3 -> return 3 * func(2)
// Step 4: number = 2 -> return 2 * func(1) // 1
// Step 5: number = 1 -> return 1

export function findFactorialIterative(number: number) {
    if (number < 0) return undefined
    if (number <= 1) return 1
    let factorial = 1;
    //code here
    while (number > 1) {
        factorial *= number
        number -= 1
    }
    return factorial;
}

// 5
// number = 4
// 5 * 4
// 5 * 4 * 3
// 5 * 4 * 3 * 2
