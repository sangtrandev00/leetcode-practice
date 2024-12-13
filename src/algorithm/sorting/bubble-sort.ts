const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function bubbleSort(array: number[]) {
    //Code here
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}

function bubbleSortV3(callback: (a: number, b: number) => number, array: number[]) {
    //Code here
    //Code here
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (callback(array[j], array[j + 1]) > 0) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

export function bubbleSortV2(array: number[]) {
    //Code here
    const length = array.length
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

// bubbleSort(numbers);
// bubbleSortV2(numbers);
bubbleSortV3((a, b) => b - a, numbers);
console.log(numbers);