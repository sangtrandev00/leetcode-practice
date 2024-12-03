import { describe, it, expect } from 'bun:test';
import { solution } from './maxProductOfThree';

describe('solution', () => {
    it('given A = [3,3,5,6,5] the function should return 150', () => {
        const result = solution([3, 3, 5, 6, 5]);
        expect(result).toEqual(150); // "abc" is the longest substring without repeating characters
    });

    it('given A = [-12,-30,3,5,6,5] the function should return 1800', () => {
        const result = solution([-10, -30, 3, 3, 5, 6, 5]);
        expect(result).toEqual(1800); // "abc" is the longest substring without repeating characters
    });

    it('given A = [-12,3,5,6,5] the function should return 150', () => {
        const result = solution([-12, 3, 3, 5, 6, 5]);
        expect(result).toEqual(150); // "abc" is the longest substring without repeating characters
    });

    it('given A = [-10,-30,-5,3,30,50,60] the function should return 90000', () => {
        const result = solution([-10, -30, 3, 3, 30, 50, 60]);
        expect(result).toEqual(90000); // "abc" is the longest substring without repeating characters
    });


});