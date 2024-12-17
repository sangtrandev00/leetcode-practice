/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

export class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

// Sử dụng trường hợp không đệ quy (độ phức tạp: Time complexity O(h) -> O(n) Trường hợp cây không cân bằng
// Space complexity 
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!p || !q) return null

    let currentNode = root;
    while (currentNode != null) {
        const currentVal = currentNode.val
        if (p.val < currentVal && q.val > currentVal || p.val > currentVal && q.val < currentVal) {
            return currentNode
        } else if (p.val < currentVal && q.val < currentVal) {
            currentNode = currentNode.left
        } else if (p.val > currentVal && q.val > currentVal) {
            currentNode = currentNode.right
        } else if (p.val == currentVal || q.val == currentVal) {
            return currentNode
        }
    }

    return root;
};

// console.log("lowestCommonAncestor", lowestCommonAncestor(new TreeNode(2, new TreeNode(1), null), new TreeNode(2), new TreeNode(1)));
// console.log("lowestCommonAncestor", lowestCommonAncestor(new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(8))), new TreeNode(2), new TreeNode(8)));
console.log("lowestCommonAncestor", lowestCommonAncestor(new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(3), new TreeNode(1)));