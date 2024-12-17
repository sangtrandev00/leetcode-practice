import { describe, test, expect } from 'bun:test'
import { lowestCommonAncestor, TreeNode } from './lowest-common-ansertor';

describe('lowestCommonAncestor', () => {
    test('should return null for an empty tree', () => {
        expect(lowestCommonAncestor(null, null, null)).toBeNull();
    });

    test('should return the root for the same node', () => {
        const root = new TreeNode(1);
        expect(lowestCommonAncestor(root, root, root)).toBe(root);
    });

    test('should return the root as LCA when one node is the root', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(lowestCommonAncestor(root, root, root.left)).toBe(root);
        expect(lowestCommonAncestor(root, root, root.right)).toBe(root);
    });

    test('should return the correct LCA for two nodes on the same level', () => {
        const root = new TreeNode(3, new TreeNode(2), new TreeNode(4));
        expect(lowestCommonAncestor(root, root.left, root.right)).toBe(root);
    });

    test('should return the correct LCA for two nodes in the left subtree', () => {
        const root = new TreeNode(5,
            new TreeNode(3, new TreeNode(2), new TreeNode(4)),
            new TreeNode(8)
        );
        if (root.left && root.left.left && root.left.right) {
            expect(lowestCommonAncestor(root, root.left.left, root.left.right)).toBe(root.left);
        }
    });

    test('should return the correct LCA for two nodes in the right subtree', () => {
        const root = new TreeNode(5,
            new TreeNode(3),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        if (root.right && root.right.left && root.right.right) {
            expect(lowestCommonAncestor(root, root.right.left, root.right.right)).toBe(root.right);
        }
    });

    test('should return the correct LCA for nodes in different subtrees', () => {
        const root = new TreeNode(6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        if (root.left && root.right) {
            expect(lowestCommonAncestor(root, root.left, root.right)).toBe(root);
            if (root.left.left) {
                expect(lowestCommonAncestor(root, root.left.left, root.right)).toBe(root);
            }
        }
    });

    test('should return the correct LCA for nodes that are not direct children', () => {
        const root = new TreeNode(6,
            new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        if (root.left && root.left.right && root.left.right.left && root.left.right.right) {
            expect(lowestCommonAncestor(root, root.left.right.left, root.left.right.right)).toBe(root.left.right);
        }
    });
});