import { describe, it, expect } from "bun:test";
import { merge } from "./merge-sort";
import { mergeSort } from "./merge-sort";

describe('Merge Function', () => {
    it('should merge two array with single item', () => {
        const left = [99];
        const right = [44];
        const result = merge(left, right);
        expect(result).toEqual([44, 99]);
    });

    it('should merge two array with 2 items and 1 item', () => {
        const left = [44, 99];
        const right = [6];
        const result = merge(left, right);
        expect(result).toEqual([6, 44, 99]);
    });

    it('should handle merging with 2 arrays with sorted array', () => {
        const left = [6, 44, 99];
        const right = [5, 21];
        const result = merge(left, right);
        expect(result).toEqual([5, 6, 21, 44, 99]);
    });


    it('should handle merging with 2 arrays with sorted array', () => {
        const left = [5, 6, 21, 44, 99];
        const right = [0, 4, 63, 87, 283];
        const result = merge(left, right);
        expect(result).toEqual([0, 4, 5, 6, 21, 44, 63, 87, 99, 283]);
    });

});

describe('Merge Sort Function', () => {
    it('should sort an unsorted array', () => {
        const unsortedArray = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
        const result = mergeSort(unsortedArray);
        expect(result).toEqual([0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283]);
    });

    it('should handle an already sorted array', () => {
        const sortedArray = [0, 1, 2, 4, 5, 6, 44, 63, 87, 99, 283];
        const result = mergeSort(sortedArray);
        expect(result).toEqual(sortedArray);
    });

    it('should handle an empty array', () => {
        const result = mergeSort([]);
        expect(result).toEqual([]);
    });

    it('should handle an array with one element', () => {
        const result = mergeSort([42]);
        expect(result).toEqual([42]);
    });

    it('should handle an array with duplicate elements', () => {
        const result = mergeSort([3, 1, 2, 3, 3, 0]);
        expect(result).toEqual([0, 1, 2, 3, 3, 3]);
    });

    it('should handle an array with negative numbers', () => {
        const result = mergeSort([-3, -1, 0, -2, 1, 2]);
        expect(result).toEqual([-3, -2, -1, 0, 1, 2]);
    });
});