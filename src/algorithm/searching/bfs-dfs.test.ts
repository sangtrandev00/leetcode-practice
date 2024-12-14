import { describe, expect, beforeEach, test } from 'bun:test'
import { BinarySearchTree } from './bfs-dfs';

describe('BinarySearchTree', () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
        tree = new BinarySearchTree();
        // Insert nodes for testing
        tree.insert(9);
        tree.insert(4);
        tree.insert(6);
        tree.insert(20);
        tree.insert(170);
        tree.insert(15);
        tree.insert(1);
    });

    test('breathFirstSearch should return values in breadth-first order', () => {
        const result = tree.breathFirstSearch();
        expect(result).toEqual([9, 4, 20, 1, 6, 15, 170]);
    });

    test('breathFirstSearchRecursive should return values in breadth-first order', () => {
        const result = tree.breathFirstSearchRecursive([tree.root], []);
        expect(result).toEqual([9, 4, 20, 1, 6, 15, 170]);
    });

    test('DFSInorder should return values in inorder traversal', () => {
        const result = tree.DFSInorder();
        expect(result).toEqual([1, 4, 6, 9, 15, 20, 170]);
    });

    test('DFSPreorder should return values in preorder traversal', () => {
        const result = tree.DFSPreorder();
        expect(result).toEqual([9, 4, 1, 6, 20, 15, 170]);
    });

    test('DFSPostorder should return values in postorder traversal', () => {
        const result = tree.DFSPostorder();
        expect(result).toEqual([1, 6, 4, 15, 170, 20, 9]);
    });
});