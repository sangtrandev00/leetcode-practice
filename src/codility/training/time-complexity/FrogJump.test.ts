import { describe, it, expect } from 'bun:test';
import { solution } from './FrogJump';


describe('solution', () => {
    it('given the function should return 3', () => {
        const result = solution(10, 85, 30);
        expect(result).toEqual(3); // "abc" is the longest substring without repeating characters
    });

    it('given the function should return 3', () => {
        const result = solution(90, 85, 30);
        expect(result).toEqual(0); // "abc" is the longest substring without repeating characters
    });

    it('given the function should return 3', () => {
        const result = solution(800, 1000000000, 30);
        expect(result).toEqual(33333307); // "abc" is the longest substring without repeating characters
    });

});

