import { describe, it, expect } from 'bun:test';
import { twoSum, twoSumVersion2 } from './two-sum';


describe('twoSum', () => {

    // Trường hợp đẹp mà array đã được sort rồi!
    it('given the function should return [0,1]', () => {
        const result = twoSum([2, 7, 11, 15], 9);
        expect(result).toEqual([0, 1]);
    });

    it('given the function should return [1,2]', () => {
        const result = twoSum([2, 3, 4], 6);
        expect(result).toEqual([0, 2]);
    });

    it('given the function should return [0,1]', () => {
        const result = twoSum([3, 3], 6);
        expect(result).toEqual([0, 1]);
    });

    // Trường hợp xấu là Array chưa được sorted
    it('given the function twoSumVersion2 should return [1,2]', () => {
        const result = twoSumVersion2([3, 2, 4], 6);
        expect(result).toEqual([1, 2]);
    });

});