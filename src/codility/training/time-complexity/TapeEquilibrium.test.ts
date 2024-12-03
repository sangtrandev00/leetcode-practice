import { describe, it, expect } from 'bun:test';
import { solution } from './TapeEquilibrium';


describe('solution', () => {
    it('given the function should return 1', () => {
        const result = solution([3, 1, 2, 4, 3]);
        expect(result).toBe(1);
    });

});

