import { describe, it, expect } from 'bun:test'
import { canConstruct } from './ransom-note';

describe('canConstruct', () => {
    it('should return true when ransomNote can be constructed from magazine', () => {
        expect(canConstruct('a', 'a')).toBe(true);
        expect(canConstruct('aa', 'aab')).toBe(true);
        expect(canConstruct('abc', 'cba')).toBe(true);
    });

    it('should return false when ransomNote cannot be constructed from magazine', () => {
        expect(canConstruct('aa', 'ab')).toBe(false);
        expect(canConstruct('aaa', 'aa')).toBe(false);
        expect(canConstruct('abcd', 'abc')).toBe(false);
    });

    it('should return true for empty ransomNote', () => {
        expect(canConstruct('', 'anystring')).toBe(true);
    });

    it('should return false for empty magazine when ransomNote is not empty', () => {
        expect(canConstruct('a', '')).toBe(false);
    });

    it('should return true when both ransomNote and magazine are empty', () => {
        expect(canConstruct('', '')).toBe(true);
    });

    it('should handle large inputs', () => {
        const ransomNote = 'a'.repeat(1000);
        const magazine = 'a'.repeat(1000);
        expect(canConstruct(ransomNote, magazine)).toBe(true);

        const magazineWithExtra = 'a'.repeat(1001);
        expect(canConstruct(ransomNote, magazineWithExtra)).toBe(true);

        const insufficientMagazine = 'a'.repeat(999);
        expect(canConstruct(ransomNote, insufficientMagazine)).toBe(false);
    });
});