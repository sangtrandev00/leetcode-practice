import { describe, it, expect } from "bun:test";
import { insertionSort, insertionSortCallback } from "./insertion-sort";

describe('Insertion Sort Functions', () => {
    const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sortedArrayAsc = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
    const sortedArrayDesc = [...sortedArrayAsc].reverse();

    describe('insertionSort', () => {
        it('should sort the array in ascending order', () => {
            const result = insertionSort([...unsortedArray]); // Spread to avoid mutation
            expect(result).toEqual(sortedArrayAsc);
        });

        it('should handle an already sorted array', () => {
            const result = insertionSort([...sortedArrayAsc]);
            expect(result).toEqual(sortedArrayAsc);
        });

        it('should handle an empty array', () => {
            const result = insertionSort([]);
            expect(result).toEqual([]);
        });

        it('should handle an array with one element', () => {
            const result = insertionSort([42]);
            expect(result).toEqual([42]);
        });

        it('should handle an array with duplicate elements', () => {
            const result = insertionSort([3, 1, 2, 3, 3, 0]);
            expect(result).toEqual([0, 1, 2, 3, 3, 3]);
        });
    });

    describe('insertionSortCallback', () => {
        it('should sort the array in ascending order using a callback', () => {
            const result = insertionSortCallback([...unsortedArray], (a, b) => a - b);
            expect(result).toEqual(sortedArrayAsc);
        });

        it('should sort the array in descending order using a callback', () => {
            const result = insertionSortCallback([...unsortedArray], (a, b) => b - a);
            expect(result).toEqual(sortedArrayDesc);
        });

        it('should handle an already sorted array in ascending order', () => {
            const result = insertionSortCallback([...sortedArrayAsc], (a, b) => a - b);
            expect(result).toEqual(sortedArrayAsc);
        });

        it('should handle an already sorted array in descending order', () => {
            const result = insertionSortCallback([...sortedArrayDesc], (a, b) => b - a);
            expect(result).toEqual(sortedArrayDesc);
        });

        it('should handle an empty array', () => {
            const result = insertionSortCallback([], (a, b) => a - b);
            expect(result).toEqual([]);
        });

        it('should handle an array with one element', () => {
            const result = insertionSortCallback([42], (a, b) => a - b);
            expect(result).toEqual([42]);
        });

        it('should handle an array with duplicate elements', () => {
            const result = insertionSortCallback([3, 1, 2, 3, 3, 0], (a, b) => a - b);
            expect(result).toEqual([0, 1, 2, 3, 3, 3]);
        });
    });
});