import { describe, it, expect } from 'bun:test';
import { romanToInt } from './roman-to-integer';

describe('romanToInt', () => {
    it('should return 3 for input "III"', () => {
        const result = romanToInt("III");
        expect(result).toBe(3); // "abc" is the longest substring without repeating characters
    });

    it('should return 58 for input "LVIII"', () => {
        const result = romanToInt("LVIII");
        expect(result).toBe(58); // "b" is the longest substring without repeating characters
    });

    it('should return 1994 for input "MCMXCIV"', () => {
        const result = romanToInt("MCMXCIV");
        expect(result).toBe(1994); // "wke" is the longest substring without repeating characters
    });
});