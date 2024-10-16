import { describe, it, expect } from 'bun:test';
import { lengthOfLongestSubstring } from './pattern-solution';

describe('lengthOfLongestSubstring: using substring solution', () => {
    it('should return 3 for input "abcabcbb"', () => {
        const result = lengthOfLongestSubstring("abcabcbb");
        expect(result).toBe(3); // "abc" is the longest substring without repeating characters
    });

    it('should return 1 for input "bbbbb"', () => {
        const result = lengthOfLongestSubstring("bbbbb");
        expect(result).toBe(1); // "b" is the longest substring without repeating characters
    });

    it('should return 3 for input "pwwkew"', () => {
        const result = lengthOfLongestSubstring("pwwkew");
        expect(result).toBe(3); // "wke" is the longest substring without repeating characters
    });
});