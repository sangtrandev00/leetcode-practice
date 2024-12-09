

export class DBLinkedList {
    head: any;
    tail: any;
    length: number;
    constructor(value: any) {
        this.head = {
            value: value,
            prev: null,
            next: null
        };
        this.tail = this.head; // Reference
        this.length = 1;
    }

    append(value: number) {
        //Code here
        const newNode = {
            value: value,
            prev: this.tail,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this
    }

    prepend(value: number) {
        const newHead = {
            value: value,
            prev: null,
            next: this.head
        }
        this.head = newHead;
        this.length++;
        return this
    }

    lookup(index: number) {
        let counter = 0;
        let currentNode = this.head
        while (index !== counter) {
            currentNode = currentNode.next
            counter++
        }
        return currentNode.value
    }

    search(targetValue: number) {
        let index = 0;
        while (this.head.next !== null) {
            if (this.head.value === targetValue) {
                return true
            }
            this.head = this.head.next
            index++
        }
        return -1 // undefined
    }

    // More clean
    insert(index: number, value: number) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log("yes");
            return this.append(value);
        }

        const newNode = {
            value: value,
            prev: null,
            next: null,
        };
        const leader = this.traverseToIndex(index - 1);
        const follower = leader.next;
        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;
        this.length++;
        return this.printList();
    }

    remove(index: number) {
        // Make sure index is a number and less than length
        if (typeof index !== "number") {
            return
        }
        let removed = null
        if (index >= this.length - 1) {
            this.removeTail()
        } else {
            const currentNode = this.traverseToIndex(index - 1)
            removed = currentNode.next
            currentNode.next = removed.next
            this.length--
        }
        return this
    }

    traverseToIndex(index: number) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    traverseBackwardToIndex(index: number) {
        let counter = this.length;
        let currentNode = this.tail
        while (counter !== index) {
            currentNode = currentNode.prev;
            counter--
        }
        return currentNode
    }

    removeFront() {
        this.head = this.head.next; // O(1)
        this.head.prev = null
        this.length--
    }

    removeTail() {
        const currentTail = this.tail.prev
        currentTail.next = null
        this.tail = currentTail
        this.length--
        return this
    }

    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
        return array;
    }

    // ## Hard to understand -> let's debug
    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        let first = this.head;
        this.tail = first;
        let second = first.next;
        while (second) {
            const temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null; // Tại sao head .next lúc này gán bằng null làm gì ?
        this.head = first;
        return this.printList();
    }

    reverseV2() {
        if (!this.head) {
            return this.printList(); // Return if the list is empty
        }

        if (!this.head.next) {
            return this.head;
        }
    }

}

let myDBLinkedList = new DBLinkedList(10);
myDBLinkedList.append(5);
myDBLinkedList.append(16);
myDBLinkedList.prepend(1);
myDBLinkedList.insert(2, 99);
console.log("myDBLinkedList.printList() before reverse: ", myDBLinkedList);
// [1, 10, 99 5, 16]
// => [16, 5, 99, 10, 1]
console.log("myDBLinkedList.reverse()", myDBLinkedList.reverse());
// console.log("myDBLinkedList.printList() after reverse: ", myDBLinkedList.printList())


