import { describe, it, expect } from 'bun:test';
import { findFirstAccurringCharacter } from './first-accurring-character';


describe('findFirstAccurringCharacter', () => {

    it('given the function should return [2, 7, 11, 15]', () => {
        const result = findFirstAccurringCharacter([2, 7, 11, 15]);
        expect(result).toBeUndefined();
    });

    it('given the function should return [2, 3, 2, 15]', () => {
        const result = findFirstAccurringCharacter([2, 3, 2, 15]);
        expect(result).toBe(2);
    });

    it('given the function should return [2, 5, 5, 2, 4]', () => {
        const result = findFirstAccurringCharacter([2, 5, 5, 2, 4]);
        expect(result).toBe(5);
    });

});