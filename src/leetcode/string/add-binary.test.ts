import { addBinary } from './add-binary';
import { describe, test, expect } from 'bun:test';

describe('addBinary', () => {
    test('should return 0 for adding two zeros', () => {
        expect(addBinary('0', '0')).toBe('0');
    });

    test('should return the same binary for adding zero', () => {
        expect(addBinary('1', '0')).toBe('1');
        expect(addBinary('0', '1')).toBe('1');
    });

    test('should return 10 for adding 1 and 1', () => {
        expect(addBinary('1', '1')).toBe('10');
    });

    test('should correctly add two binary numbers of equal length', () => {
        expect(addBinary('1010', '1011')).toBe('10101');
        expect(addBinary('1101', '1011')).toBe('11000');
    });

    test('should correctly add binary numbers of different lengths', () => {
        expect(addBinary('111', '1')).toBe('1000');
        expect(addBinary('111111', '1')).toBe('1000000');
        expect(addBinary('101010', '1100')).toBe('100110');
    });

    test('should handle empty strings', () => {
        expect(addBinary('', '101')).toBe('101');
        expect(addBinary('101', '')).toBe('101');
        expect(addBinary('', '')).toBe('0');
    });
});