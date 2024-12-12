import { test, expect, describe } from 'bun:test';
import { findFactorialRecursive, findFactorialIterative } from './recursion-factorial';

describe('Factorial Functions', () => {
    // Test cases for both recursive and iterative implementations
    const testCases = [
        { input: 0, expected: 1 },   // Edge case: 0! = 1
        { input: 1, expected: 1 },   // Edge case: 1! = 1
        { input: 5, expected: 120 }, // Normal case: 5! = 120
        { input: 7, expected: 7 * 6 * 5 * 4 * 3 * 2 * 1 } // Larger number
    ];

    // Test recursive implementation
    test('findFactorialRecursive handles various inputs', () => {
        testCases.forEach(({ input, expected }) => {
            expect(findFactorialRecursive(input)).toBe(expected);
        });
    });

    // Test iterative implementation
    test('findFactorialIterative handles various inputs', () => {
        testCases.forEach(({ input, expected }) => {
            expect(findFactorialIterative(input)).toBe(expected);
        });
    });

    // Error and edge case handling
    test('findFactorialRecursive handles negative numbers', () => {
        expect(findFactorialRecursive(-1)).toBeUndefined();
    });

    test('findFactorialIterative handles negative numbers', () => {
        expect(findFactorialIterative(-1)).toBeUndefined;
    });

});