import { describe, it, expect } from 'bun:test';
import { solution } from './max-slice';


describe('solution', () => {
    it('given A =  the function should return 15', () => {
        const result = solution([1, 2, 3, 4, 5]);
        expect(result).toEqual(15); // "abc" is the longest substring without repeating characters
    });

    it('given A =  the function should return 16', () => {
        const result = solution([1, 2, 3, 4, 6]);
        expect(result).toEqual(16); // "abc" is the longest substring without repeating characters
    });

    it('given A =  the function should return 16', () => {
        const result = solution([3, 2, -6, 4, 0]);
        expect(result).toEqual(5); // "abc" is the longest substring without repeating characters
    });

});