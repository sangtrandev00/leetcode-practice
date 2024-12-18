import { describe, test, expect } from 'bun:test'
import { majorityElement } from './majority-element';

describe('majorityElement', () => {
    test('should return 3 for input [3, 3, 3, 4, 2]', () => {
        expect(majorityElement([3, 3, 3, 4, 2])).toBe(3);
    });

    test('should return 1 for input [1, 1, 2, 1, 3, 1]', () => {
        expect(majorityElement([1, 1, 2, 1, 3, 1])).toBe(1);
    });

    test('should return 2 for input [2, 2, 1, 1, 1, 2, 2]', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });

    test('should return -1 for empty input', () => {
        expect(majorityElement([])).toBe(-1);
    });

    test('should return 3 for input [1, 2, 3, 3, 3]', () => {
        expect(majorityElement([1, 2, 3, 3, 3])).toBe(3);
    });
});