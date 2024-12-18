export function majorityElement(nums: number[]): number {
    if (nums.length == 0) return -1

    nums.sort((a, b) => a - b) // ONLogN: Heapsort OLogN or QuickSort/Insertion sort (google chrome)
    return Math.floor(nums[Math.floor(nums.length / 2)])
};


console.log("major element: ", majorityElement([3, 3, 3, 4, 2]))