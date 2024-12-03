import { describe, it, expect } from 'bun:test';
import { solution } from './triangle';

describe('solution', () => {

    it('given A = [10, 2, 5, 1, 8, 20] the function should return 1', () => {
        const result = solution([10, 2, 5, 1, 8, 20]);
        expect(result).toEqual(1); // "abc" is the longest substring without repeating characters
    });

    it('given A = [10, 50, 5, 1] the function should return 0', () => {
        const result = solution([10, 50, 5, 1]);
        expect(result).toEqual(0); // "abc" is the longest substring without repeating characters
    });

});