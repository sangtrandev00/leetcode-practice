import { describe, test, expect } from 'bun:test'
import { isAnagram } from './valid-anagram';

describe('isAnagram', () => {
    test('should return true for two empty strings', () => {
        expect(isAnagram("", "")).toBe(true);
    });

    test('should return false for strings of different lengths', () => {
        expect(isAnagram("abc", "ab")).toBe(false);
        expect(isAnagram("abcd", "abcde")).toBe(false);
    });

    test('should return true for identical strings', () => {
        expect(isAnagram("listen", "listen")).toBe(true);
    });

    test('should return true for valid anagrams', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
        expect(isAnagram("rat", "tar")).toBe(true);
        expect(isAnagram("evil", "vile")).toBe(true);
        expect(isAnagram("triangle", "integral")).toBe(true);
    });

    test('should return false for non-anagrams', () => {
        expect(isAnagram("hello", "world")).toBe(false);
        expect(isAnagram("python", "java")).toBe(false);
        expect(isAnagram("apple", "pale")).toBe(false);
    });

    test('should handle strings with spaces and punctuation', () => {
        expect(isAnagram("a gentleman", "elegant man")).toBe(true);
        expect(isAnagram("The Morse Code", "Here come dots")).toBe(true);
        expect(isAnagram("Listen", "Silent")).toBe(true); // Case insensitive
    });

    test('should return false for strings with different character counts', () => {
        expect(isAnagram("aabbcc", "abc")).toBe(false);
        expect(isAnagram("abc", "aabbcc")).toBe(false);
    });
});