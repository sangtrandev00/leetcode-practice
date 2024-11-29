import { describe, it, expect } from 'bun:test';
import { solution } from './OddOccurrencesInArray';


describe('solution', () => {
    it('given A = [3,3,5,6,5] the function should return 6', () => {
        const result = solution([3, 3, 5, 6, 5]);
        expect(result).toEqual(6); // "abc" is the longest substring without repeating characters
    });
    it('given A = [9,3,9,3,9,7,9] the function should return 6', () => {
        const result = solution([9, 3, 9, 3, 9, 7, 9]);
        expect(result).toEqual(7); // "abc" is the longest substring without repeating characters
    });

});