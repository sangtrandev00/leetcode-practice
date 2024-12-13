
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function selectionSort(array: number[]) {
    //Code Here
    const length = array.length
    for (let i = 0; i < length; i++) {
        let minItem = array[i]
        let minIndex = i
        for (let j = i + 1; j < length; j++) {
            if (array[j] < minItem) {
                minItem = array[j]
                minIndex = j
            }
        }
        // Swap the found minimum element with the first element
        let temp = array[i]
        array[i] = minItem
        array[minIndex] = temp
    }
    return array
}

export function selectionSortCallback(array: number[], callback: (a: number, b: number) => number) {
    //Code Here
    const length = array.length
    for (let i = 0; i < length; i++) {
        let item = array[i]
        let index = i
        for (let j = i + 1; j < length; j++) {
            if (callback(array[j], item) < 0) {
                item = array[j]
                index = j
            }
        }
        if (index !== i) {
            let temp = array[i]
            array[i] = item
            array[index] = temp
        }
    }
    return array
}

// console.log(selectionSort([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
// console.log(selectionSortCallback(numbers, (a, b) => b - a));