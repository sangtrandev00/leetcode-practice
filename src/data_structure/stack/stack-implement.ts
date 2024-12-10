import { LinkedList } from "../linkedList/reverseLinkedList";

class Node {
    value: any
    next: any
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

export class Stack {
    top: any
    bottom: any
    length: number
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top
    }

    push(value: any) {
        const newNode = new Node(value)
        if (this.length == 0) {
            this.top = newNode
            this.bottom = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.next = holdingPointer
        }
        this.length++
        return this
    }

    pop() {
        if (!this.top) return null
        const holderPointer = this.top

        this.top = this.top.next
        if (this.top == null) {
            this.bottom = null
        }
        this.length--
        return holderPointer
    }

    isEmpty() {
        return this.length === 0
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push(1)
myStack.push(3)
myStack.push(100)
myStack.push(3000)
console.log("myStack", myStack);
console.log("myStack", myStack.pop());
// console.log("myStack.pop()", myStack.pop());
// console.log("myStack", myStack);
// console.log("peek", myStack.peek());
