const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

export function mergeSort(array: number[]): number[] {
    // Stop point
    if (array.length <= 1) {
        return array
    }
    // Split Array in into right and left
    // Split Array in into right and left
    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    // Recursive point
    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
// Lần 1: left: [99, 44, 6, 2, 1, 5], right: [63, 87, 283, 4, 0]
// Lần 1: return merge(mergeSort([99, 44, 6, 2, 1, 5]), mergeSort([ 63, 87, 283, 4, 0]))
// Lần 2: Chia nháp nhỏ ra 
// Lần 3: 
// Lần cuối: ta sẽ có merge của ( merge([item, item], [item]) hoặc merge([item], [item]))


// Vấn đề bây giờ nằm ở hàm merge (hàm con thôi! => Chia nhỏ thành bài toán merge 2 mảng đã sắp xếp => Thành một mảng tăng dần, với độ phức tạp nhỏ nhất)
export function merge(left: number[], right: number[]) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// console.log("merge([99, 44, 6, 2, 1, 5], [63, 87, 283, 4, 0])", merge([1, 2, 6, 12, 30], [4, 5, 12, 44]));

const answer = mergeSort(numbers);
console.log(answer);