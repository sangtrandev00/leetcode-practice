import { HashTable } from './hash-table-implement';
import { describe, it, expect, beforeEach } from 'bun:test';

describe('HashTable', () => {
    let hashTable: HashTable;

    beforeEach(() => {
        hashTable = new HashTable(50);
    });

    it('should set and retrieve a value', () => {
        hashTable.set('grapes', 10000);
        expect(hashTable.get('grapes')).toBe(10000);
    });

    it('should handle collisions', () => {
        hashTable.set('grapes', 10000);
        hashTable.set('grapes', 100001); // Collision
        expect(hashTable.get('grapes')).toBe(10000);
    });

    it('should return undefined for non-existent key', () => {
        expect(hashTable.get('nonexistent')).toBeUndefined();
    });

    it('should return all keys', () => {
        hashTable.set('grapes', 10000);
        hashTable.set('apples', 54);
        const keys = hashTable.keys();
        expect(keys).toContain('grapes');
        expect(keys).toContain('apples');
    });

    it('should return all values', () => {
        hashTable.set('grapes', 10000);
        hashTable.set('apples', 54);
        const values = hashTable.values();
        expect(values).toContain(10000);
        expect(values).toContain(54);
    });

    it('should search for a value', () => {
        hashTable.set('grapes', 10000);
        hashTable.set('apples', 54);
        const result = hashTable.search(54);
        expect(result).toEqual(['apples', 54]);
    });

    it('should return undefined for search of non-existent value', () => {
        hashTable.set('grapes', 10000);
        const result = hashTable.search(99999);
        expect(result).toBeUndefined();
    });
});