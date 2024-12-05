import { describe, it, expect } from 'bun:test';
import { coinChangeGreedy } from './coins';


describe('coinChangeGreedy', () => {

    it('given A = [11, 2, 5], the function should return 101', () => {
        const result = coinChangeGreedy([1, 2, 5], 11);
        expect(result).toBe([5, 5, 1]);
    });

});