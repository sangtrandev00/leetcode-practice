export function addBinary(a: string, b: string): string {
    if (a.length == 0) return b
    if (b.length == 0) return a
    if (a.length == 0 && b.length == 0) return '0'
    let sum = ''
    let carry = 0
    // 1010
    // 101
    while (a.length > 0 || b.length > 0 || carry != 0) {
        const currentSum = Number(a[a.length - 1] ?? 0) + Number(b[b.length - 1] ?? 0)
        if (currentSum == 2) {
            if (carry > 0) {
                sum = `${1}${sum}`
            } else {
                sum = `${0}${sum}`
                carry += 1
            }
        } else {
            if (carry > 0) {
                if (currentSum + carry == 2) {
                    sum = `${0}${sum}`
                } else {
                    sum = `${1}${sum}`
                    carry--
                }
            } else {
                sum = `${currentSum}${sum}`
            }
        }
        a = a.slice(0, -1)
        b = b.slice(0, -1)
    }
    return sum
};

// console.log(addBinary('1010', '1011'));
// console.log(addBinary('1010', '101'));
// console.log(addBinary('11', '1'));
// console.log(addBinary('1101', '1011')); // 11000
// Time complexity: O(Max(n, m)), Có cách nào làm tốt hơn hay không ?