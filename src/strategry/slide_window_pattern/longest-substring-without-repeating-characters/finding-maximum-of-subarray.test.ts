import { describe, it, expect } from 'bun:test';
import { findingMaximumOfSubarray } from './finding-maximum-of-subarray';

// describe('findingMaximumOfSubarray with 3 elements consequence', () => {
//     it('should return 3 for input "abcabcbb"', () => {
//         const result = findingMaximumOfSubarray([1, 2, 4, 5, 6, 12]);
//         expect(result).toBe(19); // "abc" is the longest substring without repeating characters
//     });

//     it('should return 1 for input "bbbbb"', () => {
//         const result = findingMaximumOfSubarray([1, 2, 3, 4, 5]);
//         expect(result).toBe(12); // "b" is the longest substring without repeating characters
//     });

//     it('should return 3 for input "pwwkew"', () => {
//         const result = findingMaximumOfSubarray([4, 5, 6, 22, 21, 11, 4]);
//         expect(result).toBe(44); // "wke" is the longest substring without repeating characters
//     });
// });