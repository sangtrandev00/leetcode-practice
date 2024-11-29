export const convertToBinary = (num: number) => {
    let binaryNumber = [];
    while (num > 0) {
        binaryNumber.push(num % 2)
        num = Math.floor(num / 2);
    }
    return binaryNumber.reverse().join('')
}


export function binaryGap(number: number): number {
    const binaryNumber = convertToBinary(number)
    // 1000010001 ==> return 0000
    let leftIndex = 0;
    let length = 0;
    for (let i = 0; i < binaryNumber.length; i++) {
        if (binaryNumber[i] === '1') {
            leftIndex = i
            for (let j = i + 1; j <= binaryNumber.length; j++) {
                if (binaryNumber[j] == `1`) {
                    length = Math.max(length, j - leftIndex - 1)
                    break;
                }
            }
        }

    }
    return length;
}

binaryGap(529)




