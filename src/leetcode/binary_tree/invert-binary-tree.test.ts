import { describe, test, expect } from 'bun:test'
import { invertTree, TreeNode } from './invert-binary-tree';

describe('invertTree', () => {
    test('should return null for an empty tree', () => {
        expect(invertTree(null)).toBeNull();
    });

    test('should return the same single node tree', () => {
        const singleNode = new TreeNode(1);
        expect(invertTree(singleNode)).toEqual(singleNode);
    });

    test('should invert a tree with two levels', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const inverted = invertTree(root);
        if (inverted) {
            expect(inverted.val).toBe(1);
            if (inverted.left) {
                expect(inverted.left.val).toBe(3);
            }
            if (inverted.right) {
                expect(inverted.right.val).toBe(2);
            }
        }
    });

    test('should invert a tree with three levels', () => {
        const root = new TreeNode(4,
            new TreeNode(2, new TreeNode(1), new TreeNode(3)),
            new TreeNode(7, new TreeNode(6), new TreeNode(9))
        );
        const inverted = invertTree(root);
        if (inverted) {
            expect(inverted.val).toBe(4);
            expect(inverted.left?.val).toBe(7);
            expect(inverted.right?.val).toBe(2);
            expect(inverted.left?.left?.val).toBe(9);
            expect(inverted.left?.right?.val).toBe(6);
            expect(inverted.right?.left?.val).toBe(3);
            expect(inverted.right?.right?.val).toBe(1);
        }

    });

    test('should handle a tree with only left children', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        const inverted = invertTree(root);
        expect(inverted?.val).toBe(1);
        expect(inverted?.left).toBeNull();
        expect(inverted?.right?.val).toBe(2);
        expect(inverted?.right?.right?.val).toBe(3);
    });

    test('should handle a tree with only right children', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const inverted = invertTree(root);
        expect(inverted?.val).toBe(1);
        expect(inverted?.right).toBeNull();
        expect(inverted?.left?.val).toBe(2);
        expect(inverted?.left?.left?.val).toBe(3);
    });
});