import { LinkedList } from "../linkedList/reverseLinkedList";

export class HashTable {
    data: any[];
    constructor(size: number) {
        this.data = new Array(size);
    }

    // O(1)
    _hash(key: string): number {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }

    // O(1)
    set(key: string, value: any) {
        let address = this._hash(key);

        if (!this.data[address]) {
            this.data[address] = [];
        }

        this.data[address].push([key, value]);
    }

    // Using LinkedList to implement here!
    // setColision(key: string, value: any) {
    //     let address = this._hash(key);

    //     if (!this.data[address]) {
    //         this.data[address] = new LinkedList(value);
    //     }

    //     // this.data[address].push([key, value]);
    //     this.data[address].append([key, value]);
    // }

    search(value: any) {
        // this.data.length is the number of buckets
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] && this.data[i].length) {
                for (let j = 0; j < this.data[i].length; j++) {
                    if (this.data[i][j][1] === value) {
                        return this.data[i][j];
                    }
                }
            }
        }
        // Worst Case: O(n)
        // Average Case: O(n)
        // Trong Javascript khi khởi tạo một Map thì số lượng bucket được phân phát là bao nhiêu ?
    }


    get(key: string) {
        let address = this._hash(key);

        const currentBucket = this.data[address];

        if (currentBucket && currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }

        return undefined;
    }

    keys() {
        const keysArray: string[] = [];
        const flatData = this.data.flat(); // O(n)

        flatData.forEach(entry => keysArray.push(entry[0])); // O(n)

        return keysArray;
    }

    values() {
        const valuesArray: any = [];
        const flatData = this.data.flat(); // O(n)

        flatData.forEach(entry => valuesArray.push(entry[1])); // O(n)

        return valuesArray;
    }

}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("grapes", 100001);
myHashTable.set("apples", 54);
myHashTable.set("oranges", 2);
myHashTable.get("grapes");
console.log(myHashTable.data)
