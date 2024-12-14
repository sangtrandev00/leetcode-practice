import { describe, it, expect } from "bun:test";
import { binarySearch } from "./binary-search";

describe('Binary Search Function', () => {
    const sortedArray = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

    it('should return the index of the element when it exists', () => {
        const result = binarySearch(sortedArray, 5);
        expect(result).toBe(4); // 5 is at index 4
    });

    it('should return -1 when the element does not exist', () => {
        const result = binarySearch(sortedArray, 100);
        expect(result).toBe(-1); // 100 is not in the array
    });

    it('should return the index of the first element', () => {
        const result = binarySearch(sortedArray, 0);
        expect(result).toBe(0); // 0 is at index 0
    });

    it('should return the index of the last element', () => {
        const result = binarySearch(sortedArray, 283);
        expect(result).toBe(10); // 283 is at index 10
    });

    it('should return -1 for an empty array', () => {
        const result = binarySearch([], 1);
        expect(result).toBe(-1); // Searching in an empty array
    });

    it('should handle an array with duplicate elements', () => {
        const arrayWithDuplicates = [1, 1, 1, 1, 1, 2, 3, 4, 5];
        const result = binarySearch(arrayWithDuplicates, 1);
        expect(result).toBe(0); // The first occurrence of 1 is at index 0
    });
});