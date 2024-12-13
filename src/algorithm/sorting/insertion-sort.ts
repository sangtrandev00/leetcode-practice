const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function insertionSort(array: number[]) {
    //Code Here
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = i; j >= 0; j--) {
            // Trường hợp xấu nhất là lặp đến j = 0 => arrar[j - 1] là undefined => Vẫn đúng
            if (array[j] < array[j - 1]) {
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            } else {
                break;
            }
        }
    }
    return array
}

export function insertionSortCallback(array: number[], callback: (a: number, b: number) => number) {
    //Code Here
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = i; j >= 0; j--) {
            if (callback(array[j], array[j - 1]) < 0) {
                let temp = array[j]
                array[j] = array[j - 1]
                array[j - 1] = temp
            } else {
                break;
            }
        }
    }
    return array
}

// console.log(insertionSort(numbers));
console.log(insertionSortCallback(numbers, (a, b) => b - a));