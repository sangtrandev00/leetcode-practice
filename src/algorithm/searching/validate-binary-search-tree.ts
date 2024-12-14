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

export function isValidBST(root: TreeNode | null): boolean {
    if (root == null) return true
    let currentNode: any = root;
    let list = []
    let queue = []
    queue.push(currentNode)

    while (queue.length > 0) {
        console.log(currentNode.val);
        currentNode = queue.shift(); // O(n) => Queue để lưu trữ các node ở phía tước
        list.push(currentNode.val) // O(1)
        if (currentNode.left) {
            if (currentNode.val <= currentNode.left.val) return false
            queue.push(currentNode.left) // O(1)
        }
        if (currentNode.right) {
            if (currentNode.val >= currentNode.right.val) return false
            queue.push(currentNode.right) // O(1)
        }
    }

    return true
};

const tree = new TreeNode(2, new TreeNode(1), new TreeNode(3));
const tree2 = new TreeNode(5, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
const tree3 = new TreeNode(5, new TreeNode(4, null, null), new TreeNode(6, new TreeNode(3), new TreeNode(7))); // Cây không cân bằng. Trường hợp này giải quyết như thế nào ?


console.log(tree);
console.log(isValidBST(tree));
console.log(isValidBST(tree2));