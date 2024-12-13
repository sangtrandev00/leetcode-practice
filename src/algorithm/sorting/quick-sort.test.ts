import { describe, it, expect } from "bun:test";
import { quickSort } from "./quick-sort";

describe('Quick Sort Function', () => {
    it('should sort an unsorted array', () => {
        const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const result = quickSort(unsortedArray, 0, unsortedArray.length - 1);
        expect(result).toEqual([0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]);
    });

    it('should handle an already sorted array', () => {
        const sortedArray = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
        const result = quickSort(sortedArray, 0, sortedArray.length - 1);
        expect(result).toEqual(sortedArray);
    });

    it('should handle an empty array', () => {
        const result = quickSort([], 0, -1);
        expect(result).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const result = quickSort([42], 0, 0);
        expect(result).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const result = quickSort([3, 1, 2, 3, 3, 0], 0, 5);
        expect(result).toEqual([0, 1, 2, 3, 3, 3]);
    });

    it('should handle an array with negative numbers', () => {
        const result = quickSort([-3, -1, 0, -2, 1, 2], 0, 5);
        expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
    });
});