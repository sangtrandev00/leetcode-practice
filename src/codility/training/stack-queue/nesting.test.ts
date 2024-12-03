import { describe, it, expect } from 'bun:test';
import { solution } from './nesting';


describe('solution', () => {
    it('given A =  the function should return 1', () => {
        const result = solution('(()(())())');
        expect(result).toEqual(1); // "abc" is the longest substring without repeating characters
    });

    it('given A =  the function should return 0', () => {
        const result = solution('())');
        expect(result).toEqual(0); // "abc" is the longest substring without repeating characters
    });


});