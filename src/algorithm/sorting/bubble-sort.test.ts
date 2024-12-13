import { describe, it, expect } from "bun:test";
import { bubbleSort, bubbleSortV2 } from "./bubble-sort";

describe('Bubble Sort Functions', () => {
    const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
    const sortedArray = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];

    describe('bubbleSort', () => {
        it('should sort the array in ascending order', () => {
            const result = bubbleSort([...unsortedArray]); // Spread to avoid mutation
            expect(result).toEqual(sortedArray);
        });

        it('should handle an already sorted array', () => {
            const result = bubbleSort([...sortedArray]);
            expect(result).toEqual(sortedArray);
        });

        it('should handle an empty array', () => {
            const result = bubbleSort([]);
            expect(result).toEqual([]);
        });

        it('should handle an array with one element', () => {
            const result = bubbleSort([42]);
            expect(result).toEqual([42]);
        });

        it('should handle an array with duplicate elements', () => {
            const result = bubbleSort([3, 1, 2, 3, 3, 0]);
            expect(result).toEqual([0, 1, 2, 3, 3, 3]);
        });
    });

    describe('bubbleSortV2', () => {
        it('should sort the array in ascending order', () => {
            const result = bubbleSortV2([...unsortedArray]); // Spread to avoid mutation
            expect(result).toEqual(sortedArray);
        });

        it('should handle an already sorted array', () => {
            const result = bubbleSortV2([...sortedArray]);
            expect(result).toEqual(sortedArray);
        });

        it('should handle an empty array', () => {
            const result = bubbleSortV2([]);
            expect(result).toEqual([]);
        });

        it('should handle an array with one element', () => {
            const result = bubbleSortV2([42]);
            expect(result).toEqual([42]);
        });

        it('should handle an array with duplicate elements', () => {
            const result = bubbleSortV2([3, 1, 2, 3, 3, 0]);
            expect(result).toEqual([0, 1, 2, 3, 3, 3]);
        });
    });
});