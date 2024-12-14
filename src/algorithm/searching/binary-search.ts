// Function này chưa handle trường hợp duplicate element trong array!
export function binarySearch(array: number[], target: number): number {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (array[middle] === target) {
            return middle
        } else if (array[middle] < target) {
            // Target nằm bên phải
            left = middle + 1
        } else if (array[middle] > target) {
            // Target nằm bên trái
            right = middle - 1
        }
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));