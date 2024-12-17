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

export function invertTree(root: TreeNode | null): TreeNode | null {

    if (!root) return root

    let currentNode: any = root;
    let queue = []
    queue.push(currentNode)


    while (queue.length > 0) {
        currentNode = queue.shift(); // O(n) => Queue để lưu trữ các node ở phía tước

        const temp = currentNode.left
        currentNode.left = currentNode.right
        currentNode.right = temp

        if (currentNode.left) {
            queue.push(currentNode.left) // O(1)
        }
        if (currentNode.right) {
            queue.push(currentNode.right) // O(1)
        }
    }

    return root

};

// console.log(invertTree(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
// console.log(invertTree(new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)))));
// console.log(invertTree(null));
const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
console.log("right children", invertTree(root));