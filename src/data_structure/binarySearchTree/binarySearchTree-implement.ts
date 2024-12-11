
class Node {
    left: any;
    right: any;
    value: number;
    constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    root: any
    constructor() {
        this.root = null;
    }
    insert(value: number) {
        if (this.root === null) {
            this.root = new Node(value)
        }
        // Làm sao để lặp qua (Chẳng lẽ sử dụng recursion)

        // So sánh 

        // Gán giá trị

    }
    lookup(value: number) {

    }

    remove(value: number) {

    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.remove(170);
JSON.stringify(traverse(tree.root));
console.log(tree.lookup(20));

//     9
//  4     20
//1  6  15  170

function traverse(node: any) {
    const tree: any = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}