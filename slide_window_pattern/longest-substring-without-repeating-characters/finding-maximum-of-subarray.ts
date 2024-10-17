export function findingMaximumOfSubarray(nums: number[]): number {


    if (nums.length < 3) return 0
    let max = 0;
    let leftIndex = 0;
    let rightIndex = 3;

    for (let rightIndex = 3; rightIndex < nums.length; rightIndex++) {

        let currentSum = 0
        for (let leftIndex = 0; leftIndex < rightIndex + 3; leftIndex++) {
            const element = nums[leftIndex];
            currentSum += element;
        }
        if (currentSum > max) {
            max = currentSum
        }
        leftIndex++;
        rightIndex++;
    }


    return 1
}