export function containsDuplicate(nums: number[]): boolean {

    const dict: Record<string, any> = {} // O(n) space
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) {
            return true
        } else {
            dict[nums[i]] = 1
        }
    }

    return false

};

console.log("contains: ", containsDuplicate([1, 2, 3]));