
const caching: any = {}
function rob(nums: number[]): number {
    if (nums.length == 0) return -1
    if (nums.length == 1) return nums[0]
    if (nums.length == 2) {
        if (nums[0] > nums[1]) {
            return nums[0]
        } else {
            return nums[1]
        }
    }
    caching[0] = nums[0]
    caching[1] = nums[1]
    let currentValue = 0
    let max = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        currentValue = nums[i] + caching[i - 2]
        if (currentValue > max) {
            max = currentValue
        }
        caching[i] = currentValue
    }

    return max
};

console.log(rob([1, 2, 3, 1]));
console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 3, 1]));
console.log(rob([2, 1, 1, 2]));
console.log(rob([2, 1, 1, 2, 4, 5])); // Nghĩa ngay đến recursive function và dynamic programming!