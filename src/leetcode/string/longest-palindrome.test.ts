import { describe, it, expect } from 'bun:test'
import { longestPalindrome } from './longest-palindrome';

describe('longestPalindrome', () => {
    it('should return 0 for an empty string', () => {
        expect(longestPalindrome('')).toBe(0);
    });

    it('should return 1 for a single character string', () => {
        expect(longestPalindrome('a')).toBe(1);
        expect(longestPalindrome('b')).toBe(1);
    });

    it('should return the length of the longest palindrome for various cases', () => {
        expect(longestPalindrome('abccccdd')).toBe(7); // "dccaccd" or "ccdcc"
        expect(longestPalindrome('aabb')).toBe(4); // "abba"
        expect(longestPalindrome('abc')).toBe(1); // "a", "b", or "c"
        expect(longestPalindrome('racecar')).toBe(7); // "racecar"
        expect(longestPalindrome('civic')).toBe(5); // "civic"
    });

    it('should handle strings with all identical characters', () => {
        expect(longestPalindrome('aaaa')).toBe(4); // "aaaa"
    });

    it('should handle strings with no palindromic characters', () => {
        expect(longestPalindrome('xyz')).toBe(1); // "x", "y", or "z"
    });

    it('should not handle mixed cases', () => {
        expect(longestPalindrome('AabccBA')).toBe(5); // "abccba" or "bccb"
    });

    it('should handle long strings', () => {
        const longString = 'a'.repeat(1000) + 'b' + 'a'.repeat(1000);
        expect(longestPalindrome(longString)).toBe(2001); // "a...ab...a"
    });
});