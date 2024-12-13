const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// Chọn pivot 99
// Lần 1: 99 với 0 => swap 0 với 99 => [0, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4]
// Lần 2: 99 với 4 => swap 4 với 99 => [0, 4, 99, 44, 6, 2, 1, 5, 63, 87, 283]
// Lần 3: 99 với 283 => Không thể swap
// Lần 4: 99 với 87 => Swap 87 với 99 => [0, 4, 87, 99, 44, 6, 2, 1, 5, 63, 283]
// Lần 5: 99 với 63 => Swap 63 với 99 => [0, 4, 87, 63, 99, 44, 6, 2, 1, 5, 283]
// ...
// Lần thứ n: 99 với .. => Swap  với 99 => [0, 4, 87, 63, 5, 99, 44, 6, 2, 1, 283]
// Lần thứ n: 99 với .. => Swap  với 99 => [0, 4, 87, 63, 5, 1, 99, 44, 6, 2, 283]
// Lần thứ n: 99 với .. => Swap  với 99 => [0, 4, 87, 63, 5, 1, 2, 99, 44, 6, 283]
// Lần thứ n: 99 với .. => Swap  với 99 => [0, 4, 87, 63, 5, 1, 2, 6, 44, 99 , 283]


export function quickSort(array: number[], left: number, right: number) {
    // Đây chỉ là tham khảo thôi!
    let pivot;
    let partitionIndex: number;

    if (left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;

}

function partition(array: number[], pivot: number, left: number, right: number): number {
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array: number[], firstIndex: number, secondIndex: number) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

//Select first and last index as 2nd and 3rd parameters
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);