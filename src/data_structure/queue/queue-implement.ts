class Node {
    value: any;
    next: any;
    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
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
        if (this.length === 0) {
            this.first = new Node(value)
            this.last = this.first
        } else {
            const newNode = new Node(value)
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this.last
    }
    dequeue() {
        const holder = this.first
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