import { describe, it, expect } from 'bun:test';
import { solution } from './test3';


describe('solution', () => {

    it('given A =  the function should return 1', () => {
        const result = solution([1, 8, 7, 3, 4, 1, 8], [6, 4, 1, 8, 5, 1, 7]);
        expect(result).toBe(3); // "abc" is the longest substring without repeating characters
    });

});