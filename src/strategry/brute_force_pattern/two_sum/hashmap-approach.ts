export function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for (let i = 0; i < nums.length; i++) {
        const remaining = target - nums[i]
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i]
        }
        map.set(remaining, i)
    }

    return []

};

twoSum([1, 2, 4, 5], 9)
