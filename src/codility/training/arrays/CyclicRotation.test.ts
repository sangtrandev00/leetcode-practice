import { describe, it, expect } from 'bun:test';
import { betterSolution, solution } from './CyclicRotation';

describe('solution', () => {
    it('given A = [3, 8, 9, 7, 6], K = 3 the function should return [9, 7, 6, 3, 8]', () => {
        const result = solution([3, 8, 9, 7, 6], 3);
        expect(result).toEqual([9, 7, 6, 3, 8]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4], K = 4 the function should return [1, 2, 3, 4]', () => {
        const result = solution([1, 2, 3, 4], 4);
        expect(result).toEqual([1, 2, 3, 4]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4,5,6,7,0], K = 8 the function should return [1, 2, 3, 4]', () => {
        const result = solution([1, 2, 3, 4, 5, 6, 7, 0], 8);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 0]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4,5,6,7,0,9], K = 8 the function should return [1, 2, 3, 4]', () => {
        const result = solution([1, 2, 3, 4, 5, 6, 7, 0], 9);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [0, 0, 0], K = 1 the function should return [0, 0, 0]', () => {
        const result = solution([0, 0, 0], 1);
        expect(result).toEqual([0, 0, 0]); // "abc" is the longest substring without repeating characters
    });

});

describe('betterSolution', () => {
    it('given A = [3, 8, 9, 7, 6], K = 3 the function should return [9, 7, 6, 3, 8]', () => {
        const result = betterSolution([3, 8, 9, 7, 6], 3);
        expect(result).toEqual([9, 7, 6, 3, 8]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4], K = 4 the function should return [1, 2, 3, 4]', () => {
        const result = betterSolution([1, 2, 3, 4], 4);
        expect(result).toEqual([1, 2, 3, 4]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4,5,6,7,0], K = 8 the function should return [1, 2, 3, 4]', () => {
        const result = betterSolution([1, 2, 3, 4, 5, 6, 7, 0], 8);
        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 0]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [1, 2, 3, 4,5,6,7,0,9], K = 8 the function should return [1, 2, 3, 4]', () => {
        const result = betterSolution([1, 2, 3, 4, 5, 6, 7, 0], 9);
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7]); // "abc" is the longest substring without repeating characters
    });

    it('given A =  [0, 0, 0], K = 1 the function should return [0, 0, 0]', () => {
        const result = betterSolution([0, 0, 0], 1);
        expect(result).toEqual([0, 0, 0]); // "abc" is the longest substring without repeating characters
    });

});

