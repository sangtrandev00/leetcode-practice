
import { describe, it, expect } from 'bun:test';
import { triangle, triangleSymmetrical } from './iteritor';

describe('triangle', () => {
    it('given number = 3, the function should return \n*\n**\n***', () => {
        const result = triangle(3);
        expect(result).toEqual(`*\n**\n***`); // "abc" is the longest substring without repeating characters
    });

    it('given number = 4, the function should return \n*\n**\n***\n****', () => {
        const result = triangle(4);
        expect(result).toBe(`*\n**\n***\n****`); // "b" is the longest substring without repeating characters
    });

});

describe('triangle symetrical', () => {
    it('given number = 4 the function should return \n*******\n*****\n***\n*', () => {
        const result = triangleSymmetrical(4);
        expect(result).toEqual(`*******\n *****\n  ***\n   *`); // "abc" is the longest substring without repeating characters
    });

    it('given number = 3, the function should return \n*****\n***\n*', () => {
        const result = triangleSymmetrical(3);
        expect(result).toBe(`*****\n ***\n  *`); // "b" is the longest substring without repeating characters
    });

});