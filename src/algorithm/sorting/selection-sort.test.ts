
import { describe, it, expect } from "bun:test";
import { selectionSort, selectionSortCallback } from "./selection-sort";

describe('Selection Sort', () => {
    const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sortedArray = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

    it('should sort the array in ascending order', () => {
        const result = selectionSort([...unsortedArray]); // Spread to avoid mutation
        console.log("result", result);
        expect(result).toEqual(sortedArray);
    });

    it('should handle an already sorted array', () => {
        const result = selectionSort([...sortedArray]);
        expect(result).toEqual(sortedArray);
    });

    it('should handle an empty array', () => {
        const result = selectionSort([]);
        expect(result).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const result = selectionSort([42]);
        expect(result).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const result = selectionSort([3, 1, 2, 3, 3, 0]);
        expect(result).toEqual([0, 1, 2, 3, 3, 3]);
    });
});


describe('Selection Sort with Callback', () => {
    const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sortedArrayAsc = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
    const sortedArrayDesc = [...sortedArrayAsc].reverse();

    it('should sort the array in ascending order using a callback', () => {
        const result = selectionSortCallback([...unsortedArray], (a, b) => a - b);
        expect(result).toEqual(sortedArrayAsc);
    });

    it('should sort the array in descending order using a callback', () => {
        const result = selectionSortCallback([...unsortedArray], (a, b) => b - a);
        expect(result).toEqual(sortedArrayDesc);
    });

    it('should handle an already sorted array in ascending order', () => {
        const result = selectionSortCallback([...sortedArrayAsc], (a, b) => a - b);
        expect(result).toEqual(sortedArrayAsc);
    });

    it('should handle an already sorted array in descending order', () => {
        const result = selectionSortCallback([...sortedArrayDesc], (a, b) => b - a);
        expect(result).toEqual(sortedArrayDesc);
    });

    it('should handle an empty array', () => {
        const result = selectionSortCallback([], (a, b) => a - b);
        expect(result).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const result = selectionSortCallback([42], (a, b) => a - b);
        expect(result).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const result = selectionSortCallback([3, 1, 2, 3, 3, 0], (a, b) => a - b);
        expect(result).toEqual([0, 1, 2, 3, 3, 3]);
    });
});