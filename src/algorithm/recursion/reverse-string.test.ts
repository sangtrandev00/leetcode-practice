function reverseString(str: string) {
    let result = ""
    const length = str.length
    for (let i = 0; i < length; i++) {
        result += str[length - 1 - i]
    }
    return result
}

console.log(reverseString("yoyo master"));

function reverseStringRecursive(str: string): string {

    // return Điểm dừng
    if (str.length == 0) return ""

    // Return value (Recursive)
    return str[str.length - 1] + reverseStringRecursive(str.slice(0, str.length - 1))
}

// console.log(reverseStringRecursive("yoyo master")) // output: "retsam oyoy"

// Step 1: str = "yoyo master" -> return 'r' + reverseStringRecursive("yoyo maste") 
// Step 2: str = "yoyo maste" -> return 'e' + reverseStringRecursive("yoyo mast")
