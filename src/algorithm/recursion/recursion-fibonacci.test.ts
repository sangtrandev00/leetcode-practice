import { describe, it, expect } from "bun:test";
import { fibonacciIterative, fibonacciRecursive } from "./recursion-fibonacci";

describe('Fibonacci Sequence', () => {
    // Test cases for both iterative and recursive implementations
    const testCases = [
        { input: 0, expected: 0 },
        { input: 1, expected: 1 },
        { input: 2, expected: 1 },
        { input: 3, expected: 2 },
        { input: 4, expected: 3 },
        { input: 5, expected: 5 },
        { input: 6, expected: 8 },
        { input: 7, expected: 13 },
        { input: 8, expected: 21 },
    ];

    describe('Iterative Fibonacci', () => {
        it.each(testCases)('should return $expected for input $input', ({ input, expected }) => {
            expect(fibonacciIterative(input)).toBe(expected);
        });

        it('should handle negative input', () => {
            expect(fibonacciIterative(-1)).toBe(-1);
            expect(fibonacciIterative(-5)).toBe(-1);
        });
    });

    describe('Recursive Fibonacci', () => {
        it.each(testCases)('should return $expected for input $input', ({ input, expected }) => {
            expect(fibonacciRecursive(input)).toBe(expected);
        });

        it('should handle negative input', () => {
            expect(fibonacciRecursive(-1)).toBe(-1);
            expect(fibonacciRecursive(-5)).toBe(-1);
        });

        // Note: Be cautious with large inputs due to recursive call overhead
        it('should handle larger inputs', () => {
            expect(fibonacciRecursive(10)).toBe(55);
        });
    });

    // Performance and edge case tests
    describe('Performance and Edge Cases', () => {
        it('iterative should be efficient for larger inputs', () => {
            const start = performance.now();
            const result = fibonacciIterative(20);
            const end = performance.now();

            expect(result).toBe(6765);
            expect(end - start).toBeLessThan(1); // Should complete quickly
        });

        it('recursive should handle base cases', () => {
            expect(fibonacciRecursive(0)).toBe(0);
            expect(fibonacciRecursive(1)).toBe(1);
            expect(fibonacciRecursive(2)).toBe(1);
        });
    });
});