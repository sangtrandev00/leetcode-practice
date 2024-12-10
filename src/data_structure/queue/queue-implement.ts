class Node {
    value: any;
    next: any;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

export class Queue {
    // Dùng Single LinkedList là được rồi!
    first: any;
    last: any;
    length: number;
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek() {
        return this.first
    }
    enqueue(value: any) {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this.last
    }
    dequeue() {
        if (!this.first) return null
        const holder = this.first
        if (this.first == this.last) {
            this.last = null // Special case (When there is only one element)
        }

        this.first = this.first.next;
        this.length--
        return holder
    }
    isEmpty() {
        return this.length === 0
    }
    //isEmpty;
}

const myQueue = new Queue();
myQueue.enqueue('Joy');
myQueue.enqueue('Matt');
myQueue.enqueue('Pavel');
myQueue.enqueue('Samir');
// console.log("myQueue", myQueue);
// myQueue.dequeue();
// myQueue.dequeue();
console.log("dequeue", myQueue.dequeue());
// console.log("myQueue after dequeue", myQueue);

//Joy
//Matt
//Pavel
//Samir