import { describe, it, expect } from 'bun:test';
import { binaryGap, convertToBinary } from './binaryGap';

describe('binaryGap', () => {
    it('given number = 529, the function should return 4', () => {
        const result = binaryGap(529);
        expect(result).toEqual(4); // "abc" is the longest substring without repeating characters
    });

    it('given number = 9, the function should return 2', () => {
        const result = binaryGap(9);
        expect(result).toBe(2); // "b" is the longest substring without repeating characters
    });

});

describe('convertToBinary', () => {
    it('given number = 32, the function should return 100000', () => {
        const result = convertToBinary(32);
        expect(result).toEqual('100000'); // "abc" is the longest substring without repeating characters
    });

    it('given number = 19, the function should return 10011', () => {
        const result = convertToBinary(19);
        expect(result).toEqual('10011'); // "abc" is the longest substring without repeating characters
    });

});