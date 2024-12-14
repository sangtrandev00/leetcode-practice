import { describe, test, expect } from 'bun:test';
import { TreeNode, isValidBST } from './validate-binary-search-tree';

describe('isValidBST', () => {
    test('should return true for a valid BST', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        expect(isValidBST(tree)).toBe(true);
    });

    test('should return false for an invalid BST (left child greater than parent)', () => {
        const tree = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
        expect(isValidBST(tree)).toBe(false);
    });

    test('should return false for an invalid BST (right child less than parent) - Special case for unbalance tree - will solve later!', () => {
        const tree = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)));
        expect(isValidBST(tree)).toBe(false);
    });

    test('should return true for a single node tree', () => {
        const tree = new TreeNode(1);
        expect(isValidBST(tree)).toBe(true);
    });

    test('should return true for an empty tree', () => {
        const tree = null;
        expect(isValidBST(tree)).toBe(true);
    });

    test('should return true for a valid BST with duplicate values on the left', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(2));
        expect(isValidBST(tree)).toBe(false); // Duplicate values should invalidate the BST
    });

    test('should return true for a valid BST with duplicate values on the right', () => {
        const tree = new TreeNode(2, new TreeNode(1), new TreeNode(2));
        expect(isValidBST(tree)).toBe(false); // Duplicate values should invalidate the BST
    });
});