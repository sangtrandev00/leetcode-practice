class Node {
    value: any;
    next: any;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    array: any = []
    top: any;
    bottom: any;
    length: number;
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        if (this.length == 0) return null
        return this.top
    }

    push(value: any) {
        this.array.push(value)
        if (this.length === 0) {
            this.top = this.array[0]
            this.bottom = this.array[0]
        } else {
            this.top = this.array[this.length]
        }
        this.length++

    }

    pop() {
        if (this.length == 0) return null
        const remove = this.array.pop()
        if (this.length == 0) {
            this.bottom = null
            this.top = null
        } else {
            this.top = this.array[this.array.length - 1]
        }
        this.length--
        return remove
    }

    isEmpty() {
        return this.length === 0
    }

    //isEmpty
}

const myStack = new Stack();
myStack.push(1)
myStack.push(30)
myStack.push(1000)
console.log("peek", myStack.peek());
console.log("pop", myStack.pop());
console.log("myStack", myStack);