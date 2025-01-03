
import { describe, it, expect, beforeEach } from 'bun:test';
import { BinarySearchTree } from './binarySearchTree-implement';


describe('BinarySearchTree', () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
        tree = new BinarySearchTree();
    });

    it('should insert nodes correctly', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.lookup(10)).toBeTruthy();
        expect(tree.lookup(5)).toBeTruthy();
        expect(tree.lookup(15)).toBeTruthy();
        expect(tree.lookup(20)).toBeFalsy(); // Not inserted
    });

    it('should lookup nodes correctly', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.lookup(10)).toEqual(expect.objectContaining({ value: 10 }));
        expect(tree.lookup(5)).toEqual(expect.objectContaining({ value: 5 }));
        expect(tree.lookup(15)).toEqual(expect.objectContaining({ value: 15 }));
        expect(tree.lookup(20)).toBeFalsy(); // Not inserted
    });

    it('should remove nodes correctly', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.remove(5)).toBeTruthy();
        expect(tree.lookup(5)).toBeFalsy(); // Should be removed
        expect(tree.remove(10)).toBeTruthy();
        expect(tree.lookup(10)).toBeFalsy(); // Should be removed
        expect(tree.remove(15)).toBeTruthy();
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
    });

    it('should handle removing a node with one child', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(12);
        expect(tree.remove(15)).toBeTruthy();
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
        expect(tree.lookup(12)).toEqual(expect.objectContaining({ value: 12 })); // Should still exist
    });

    it('should handle removing a node with two children', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(12);
        tree.insert(17);
        expect(tree.remove(15)).toBeTruthy();
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
        expect(tree.lookup(12)).toEqual(expect.objectContaining({ value: 12 })); // Should still exist
        expect(tree.lookup(17)).toEqual(expect.objectContaining({ value: 17 })); // Should still exist
    });

    it('should return false when removing a non-existent node', () => {
        tree.insert(10);
        expect(tree.remove(20)).toBeFalsy(); // Node does not exist
    });

    it('should remove a node with no children (leaf node)', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.remove(5)).toBeTruthy();
        expect(tree.lookup(5)).toBeFalsy(); // Should be removed
    });

    it('should remove a node with one child', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(12);
        expect(tree.remove(15)).toBeTruthy();
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
        expect(tree.lookup(12)).toEqual(expect.objectContaining({ value: 12 })); // Should still exist
    });

    it('should remove a node with two children', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(12);
        tree.insert(17);
        expect(tree.remove(15)).toBeTruthy();
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
        expect(tree.lookup(12)).toEqual(expect.objectContaining({ value: 12 })); // Should still exist
        expect(tree.lookup(17)).toEqual(expect.objectContaining({ value: 17 })); // Should still exist
    });

    it('should remove the root node with two children', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        tree.insert(12);
        tree.insert(17);
        expect(tree.remove(10)).toBeTruthy(); // Remove root
        expect(tree.lookup(10)).toBeFalsy(); // Should be removed
        expect(tree.lookup(12)).toEqual(expect.objectContaining({ value: 12 })); // Should still exist
        expect(tree.lookup(15)).toEqual(expect.objectContaining({ value: 15 })); // Should still exist
    });

    it('should remove the root node with one child', () => {
        tree.insert(10);
        tree.insert(5);
        expect(tree.remove(10)).toBeTruthy(); // Remove root
        expect(tree.lookup(10)).toBeFalsy(); // Should be removed
        expect(tree.lookup(5)).toEqual(expect.objectContaining({ value: 5 })); // Should still exist
    });

    it('should return false when removing a non-existent node', () => {
        tree.insert(10);
        expect(tree.remove(20)).toBeFalsy(); // Node does not exist
    });

    it('should handle removing the only node in the tree', () => {
        tree.insert(10);
        expect(tree.remove(10)).toBeTruthy(); // Remove the only node
        expect(tree.lookup(10)).toBeFalsy(); // Should be removed
    });

    it('should handle removing a node that is the left child of its parent', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.remove(5)).toBeTruthy(); // Remove left child
        expect(tree.lookup(5)).toBeFalsy(); // Should be removed
        expect(tree.lookup(10)).toEqual(expect.objectContaining({ value: 10 })); // Should still exist
        expect(tree.lookup(15)).toEqual(expect.objectContaining({ value: 15 })); // Should still exist
    });

    it('should handle removing a node that is the right child of its parent', () => {
        tree.insert(10);
        tree.insert(5);
        tree.insert(15);
        expect(tree.remove(15)).toBeTruthy(); // Remove right child
        expect(tree.lookup(15)).toBeFalsy(); // Should be removed
        expect(tree.lookup(10)).toEqual(expect.objectContaining({ value: 10 })); // Should still exist
        expect(tree.lookup(5)).toEqual(expect.objectContaining({ value: 5 })); // Should still exist
    });
});