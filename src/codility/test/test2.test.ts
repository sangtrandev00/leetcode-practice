import { describe, it, expect } from 'bun:test';
import { solution } from './test2';


describe('solution', () => {
    it('given A = [3,3,5,6,5] the function should return 3', () => {
        const result = solution([3, 3, 5, 6, 5]);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });

});