class Node {
    left: Node | null;
    right: Node | null;;
    value: number;
    constructor(value: number) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

export class BinarySearchTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }
    insert(value: number) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (currentNode.value > value) {
                    // Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    // Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value: number) {
        if (!this.root) {
            return false;
        }
        let currentNode: Node | null = this.root;

        while (currentNode) {
            if (currentNode.value > value) {
                // Left
                currentNode = currentNode.left;
            } else if (currentNode.value < value) {
                // Right
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value: number) {
        if (!this.root) {
            return false;
        }
        let currentNode: Node | null = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child:
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    // Memory comsumption thì rất tệ! Vì phải lưu trữ queue
    breathFirstSearch() {
        let currentNode: any = this.root;
        let list = []
        let queue = []
        queue.push(currentNode)

        while (queue.length > 0) {
            console.log(currentNode.value);
            currentNode = queue.shift(); // O(n) => Queue để lưu trữ các node ở phía tước
            list.push(currentNode.value) // O(1)
            if (currentNode.left) {
                queue.push(currentNode.left) // O(1)
            }
            if (currentNode.right) {
                queue.push(currentNode.right) // O(1)
            }
        }
        return list
    }
    breathFirstSearchRecursive(queue: any[], list: number[]): number[] {
        // Base case
        if (queue.length === 0) {
            return list
        }

        let currentNode: any = queue.shift()
        list.push(currentNode.value) // O(1)
        if (currentNode.left) {
            queue.push(currentNode.left) // O(1)
        }
        if (currentNode.right) {
            queue.push(currentNode.right) // O(1)
        }
        // Recursive case
        return this.breathFirstSearchRecursive(queue, list)
    }

    DFSInorder() {
        return this.traverseInOrder(this.root, [])
    }

    DFSPreorder() {
        return this.traversePreOrder(this.root, [])
    }
    DFSPostorder() {
        return this.traversePostOrder(this.root, [])
    }

    //     9
    //  4     20
    //1  6  15  170
    // InOrder - Left -> Root -> Right: [1, 4, 6, 9, 15, 20, 170]
    traverseInOrder(node: any, list: number[]) { // Đều sử dụng cấu trúc dữ liệu stack. Function nào gọi sau -> thì thực hiện trước!

        console.log(node.value);
        console.log(list);
        // Recursive case:
        if (node.left) {
            this.traverseInOrder(node.left, list)
        }
        list.push(node.value)
        if (node.right) {
            this.traverseInOrder(node.right, list)
        }
        // Base case ?
        return list
    }

    // PreOrder - Root -> Left -> Right: [9, 4, 1, 6, 20, 15, 170]
    traversePreOrder(node: any, list: number[]) { // Đều sử dụng cấu trúc dữ liệu stack. Function nào gọi sau -> thì thực hiện trước!
        console.log(node.value);
        console.log(list);
        list.push(node.value)
        // Recursive case:
        if (node.left) {
            this.traversePreOrder(node.left, list)
        }
        if (node.right) {
            this.traversePreOrder(node.right, list)
        }

        // Base case ?
        return list
    }

    traversePostOrder(node: any, list: number[]) { // Đều sử dụng cấu trúc dữ liệu stack. Function nào gọi sau -> thì thực hiện trước!
        console.log(node.value);
        console.log(list);
        // Recursive case:
        if (node.left) {
            this.traversePostOrder(node.left, list)
        }
        if (node.right) {
            this.traversePostOrder(node.right, list)
        }
        list.push(node.value)
        // Base case ?
        return list // Space complexity -> O(h) h: là chiều cao của cây nhị phân
    }

}

//     9
//  4     20
//1  6  15  170
// InOrder - Left -> Root -> Right: [1, 4, 6, 9, 15, 20, 170]
// PreOrder - Root -> Left -> Right: [9, 4, 1, 6, 20, 15, 170]
// PostOrder - Left -> Right -> Root: [1, 4, 6, 9, 15, 20, 170]

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// tree.remove(170);
// JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
// console.log(tree.breathFirstSearch());
// console.log(tree.breathFirstSearchRecursive([tree.root], []));
// console.log(tree.DFSInorder());
// console.log(tree.DFSPreorder());
console.log(tree.DFSPostorder());
function traverse(node: Node | null) {
    if (!node) return null
    const tree: Node | null = { value: node.value, left: null, right: null };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}