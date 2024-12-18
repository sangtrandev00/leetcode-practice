
import { describe, it, expect } from 'bun:test'
import { solution } from './first-bad-version';

describe('solution', () => {
    it('should return the first bad version when it is the first version', () => {
        const isBadVersion = (version: number) => version >= 1;
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(5)).toBe(1);
    });

    it('should return the first bad version when it is the last version', () => {
        const isBadVersion = (version: number) => version >= 5;
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(5)).toBe(5);
    });

    it('should return the first bad version when it is in the middle', () => {
        const isBadVersion = (version: number) => version >= 3;
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(5)).toBe(3);
    });

    it('should return the first bad version when all versions are good', () => {
        const isBadVersion = (version: number) => false;
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(5)).toBe(6); // Assuming 6 is the first bad version
    });

    it('should handle the case with only one version', () => {
        const isBadVersion = (version: number) => version === 1;
        const findFirstBadVersion = solution(isBadVersion);
        expect(findFirstBadVersion(1)).toBe(1);
    });
});