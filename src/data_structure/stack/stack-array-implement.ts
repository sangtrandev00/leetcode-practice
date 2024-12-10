
class Stack {
    array: any = []
    constructor() {
    }

    peek() {
        if (this.array.length == 0) return null
        return this.array[this.array.length - 1]
    }

    push(value: any) {
        this.array.push(value)
    }

    pop() {
        return this.array.pop()
    }

    isEmpty() {
        return this.array.length === 0
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