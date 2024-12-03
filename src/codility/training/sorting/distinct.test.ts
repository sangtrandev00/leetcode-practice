import { describe, it, expect } from 'bun:test';
import { solution, solution2 } from './distinct';


describe('solution', () => {
    it('given A = [3,3,5,6,5] the function should return 3', () => {
        const result = solution([3, 3, 5, 6, 5]);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });
    it('given A = [9,3,9,3,9,7,9] the function should return 3', () => {
        const result = solution([9, 3, 9, 3, 9, 7, 9]);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });

});

describe('solution 2', () => {
    it('given A = [3,3,5,6,5] the function should return 3', () => {
        const result = solution2([3, 3, 5, 6, 5]);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });
    it('given A = [9,3,9,3,9,7,9] the function should return 3', () => {
        const result = solution2([9, 3, 9, 3, 9, 7, 9]);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });

});