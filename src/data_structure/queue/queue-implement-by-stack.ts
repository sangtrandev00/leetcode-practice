import { Stack } from "../stack/stack-implement";

class CrazyQueue {
    first: any;
    last: any;
    constructor() {
        this.first = [];
        this.last = [];
    }

    // Time Complexity O(n)
    // Space Complexity O(n)
    enqueue(value: any) {
        const length = this.first.length;

        for (let i = 0; i < length; i++) {
            this.last.push(this.first.pop());
        }

        this.last.push(value);

        return this;
    }

    // Time Complexity O(n)
    // Space Complexity O(n)
    dequeue() {
        const length = this.last.length;

        for (let i = 0; i < length; i++) {
            this.first.push(this.last.pop());
        }

        this.first.pop();

        return this;
    }

    peek() {
        if (this.first.length > 0) {
            return this.first[this.first.length - 1];
        }

        return this.last[0];
    }

    isEmpty() {
        return this.last.length === 0
    }
    //isEmpty;
}

const myQueue = new CrazyQueue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
console.log("myQueue", myQueue);
// myQueue.dequeue();
// myQueue.dequeue();
// console.log("dequeue", myQueue.dequeue());
// console.log("myQueue after dequeue", myQueue);