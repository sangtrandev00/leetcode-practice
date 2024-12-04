import { describe, it, expect } from 'bun:test';
import { solution, betterSolution } from './test2';


describe('solution', () => {

    it('given A = 100, the function should return 101', () => {
        const result = solution(100);
        expect(result).toBe(101);
    });

    it('given A = 101, the function should return 102', () => {
        const result = solution(101);
        expect(result).toBe(102);
    });

    it('given A = 1222222, the function should return 1230101', () => {
        const result = solution(1222222);
        expect(result).toBe(1230101);
    });

    it('given N = 244444477, the function should return 245010101', () => {
        const result = solution(244444477);
        expect(result).toBe(245010101);
    });


    it('given A = 99, the function should return 101', () => {
        const result = solution(99);
        expect(result).toBe(101);
    });

    it('given A = 9, the function should return 10', () => {
        const result = solution(9);
        expect(result).toBe(10);
    });

    it('given A = 999, the function should return 1010', () => {
        const result = solution(999);
        expect(result).toBe(1010);
    });

    it('given A = 9999, the function should return 10101', () => {
        const result = solution(9999);
        expect(result).toBe(10101);
    });

});

describe('betterSolution', () => {

    it('given A = 100, the function should return 101', () => {
        const result = betterSolution(100);
        expect(result).toBe(101);
    });

    it('given A = 101, the function should return 102', () => {
        const result = betterSolution(101);
        expect(result).toBe(102);
    });

    it('given A = 1000, the function should return 1010', () => {
        const result = betterSolution(1000);
        expect(result).toBe(1010);
    });

    it('given A = 101, the function should return 102', () => {
        const result = betterSolution(101);
        expect(result).toBe(102);
    });

    it('given A = 99, the function should return 101', () => {
        const result = betterSolution(99);
        expect(result).toBe(101);
    });

    it('given A = 9, the function should return 10', () => {
        const result = betterSolution(9);
        expect(result).toBe(10);
    });

    it('given A = 999, the function should return 1010', () => {
        const result = betterSolution(999);
        expect(result).toBe(1010);
    });

    it('given A = 9999, the function should return 10101', () => {
        const result = betterSolution(9999);
        expect(result).toBe(10101);
    });

    it('given A = 1222222, the function should return 1230101', () => {
        const result = betterSolution(1222222);
        expect(result).toBe(1230101);
    });

    it('given N = 244444477, the function should return 245010101', () => {
        const result = betterSolution(244444477);
        expect(result).toBe(245010101);
    });

});