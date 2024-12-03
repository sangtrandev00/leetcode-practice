import { describe, it, expect } from 'bun:test';
import { isAnagram } from './anagram';

describe('isAnagram', () => {
    it('should return true  for input "(]"', () => {
        const result = isAnagram('anagram', 'nagaram');
        expect(result).toBeBoolean();
        expect(result).toBe(true);
    });

    it('should return false  for input "(]"', () => {
        const result = isAnagram('rat', 'car');
        expect(result).toBeBoolean();
        expect(result).toBe(false);
    });

});