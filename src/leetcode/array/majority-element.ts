export function majorityElement(nums: number[]): number {
    if (nums.length == 0) return -1

    nums.sort((a, b) => a - b) // ONLogN: Heapsort OLogN or QuickSort/Insertion sort (google chrome)
    return Math.floor(nums[Math.floor(nums.length / 2)])
};

export function majorityElementV2(nums: number[]): number {
    if (nums.length == 0) return -1

    const dict: Map<number, number> = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        if (dict.has(nums[i])) {
            const occurs = dict.get(nums[i]) as number + 1
            if (occurs > nums.length / 2) {
                return nums[i]
            }
            dict.set(nums[i], occurs)

        } else {
            dict.set(nums[i], 1)
        }
    }
    return nums[0] // Timecomplexity O(n), SpaceComplexity O(number)

};

console.log("major element: ", majorityElementV2([3, 3, 3, 4, 2]))