

import { describe, it, expect } from 'bun:test';
import { betterSolutionbetterSolution, solution } from './demo-task';

describe('solution', () => {
    it('given A = [1, 3, 6, 4, 1, 2], the function should return 5', () => {
        const result = solution([1, 2, 4, 5, 6, 12]);
        expect(result).toBe(3); // "abc" is the longest substring without repeating characters
    });

    it('Given A = [1, 2, 3], the function should return 4', () => {
        const result = solution([1, 2, 3]);
        expect(result).toBe(4); // "b" is the longest substring without repeating characters
    });

    it('Given A = [−1, −3], the function should return 1', () => {
        const result = solution([-1, -3]);
        expect(result).toBe(1); // "wke" is the longest substring without repeating characters
    });
});

describe('betterSolution', () => {
    it('given A = [1, 3, 6, 4, 1, 2], the function should return 5', () => {
        const result = betterSolutionbetterSolution([1, 2, 4, 5, 6, 12]);
        expect(result).toBe(3); // "abc" is the longest substring without repeating characters
    });

    it('Given A = [1, 2, 3], the function should return 4', () => {
        const result = betterSolutionbetterSolution([1, 2, 3]);
        expect(result).toBe(4); // "b" is the longest substring without repeating characters
    });

    it('Given A = [−1, −3], the function should return 1', () => {
        const result = betterSolutionbetterSolution([-1, -3]);
        expect(result).toBe(1); // "wke" is the longest substring without repeating characters
    });
});
