import { describe, it, expect } from 'bun:test';
import { twoSum } from './brute-force-appoarch';

describe('twoSum: using two sum', () => {
    it('should return [2, 3] for input [1, 2, 4, 5]', () => {
        const result = twoSum([1, 2, 4, 5], 9);
        expect(result).toEqual([2, 3]);
    });

    it('should return [0, 3] for input [1, 2, 4, 5], 6', () => {
        const result = twoSum([1, 2, 4, 5], 5);
        expect(result).toEqual([0, 2]);
    });

    it('should return [0, 1] for input [4, 8, 1, 5], 12', () => {
        const result = twoSum([4, 8, 1, 5], 12);
        expect(result).toEqual([0, 1]);
    });
});