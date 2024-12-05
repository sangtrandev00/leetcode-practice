export function twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right]

        if (left == right) break

        if (sum === target) {
            return [left, right]
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }

    return []
};

export function twoSumVersion2(nums: number[], target: number): number[] {
    const map = new Map<number, number>()
    let result: number[] = []
    nums.forEach((item: number, index: number) => {
        const remaining = target - item
        if (map.has(remaining)) {
            result = [map.get(remaining) as number, index]
        } else {
            map.set(item, index)
        }
    })
    return result
};

// twoSum([2, 7, 11, 15], 9)
// twoSum([3, 3], 6)
twoSumVersion2([3, 2, 4], 6)