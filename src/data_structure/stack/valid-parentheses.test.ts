import { describe, it, expect } from 'bun:test';
import { isValid } from './valid-parentheses';

describe('isValid: using two sum', () => {
    it('should return false  for input "(]"', () => {
        const result = isValid('()]');
        expect(result).toBeBoolean();
        expect(result).toBe(false);
    });

    it('should return true for input "()"', () => {
        const result = isValid('()');
        expect(result).toBeBoolean();
        expect(result).toBe(true);
    });

    it('should return true for input "()[]{}"', () => {
        const result = isValid('()[]{}');
        expect(result).toBeBoolean();
        expect(result).toBe(true);
    });

    it('should return true for input "([])"', () => {
        const result = isValid('([])');
        expect(result).toBeBoolean();
        expect(result).toBe(true);
    });

    it('should return false for input "]"', () => {
        const result = isValid(']');
        expect(result).toBeBoolean();
        expect(result).toBe(false);
    });

    it('should return false for input "["', () => {
        const result = isValid('[');
        expect(result).toBeBoolean();
        expect(result).toBe(false);
    });

    it('should return false for input "([}}])"', () => {
        const result = isValid('([}}])');
        expect(result).toBeBoolean();
        expect(result).toBe(false);
    });
});