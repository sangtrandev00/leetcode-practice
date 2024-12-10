import { describe, it, expect, beforeEach } from 'bun:test';
import { LinkedList } from './reverseLinkedList';

describe('LinkedList', () => {
    let list: LinkedList;

    beforeEach(() => {
        list = new LinkedList(10);
    });

    it('should append values to the list', () => {
        list.append(5);
        list.append(16);
        expect(list.printList()).toEqual([10, 5, 16]);
    });

    it('should prepend values to the list', () => {
        list.prepend(1);
        expect(list.printList()).toEqual([1, 10]);
    });

    it('should insert values at a specific index', () => {
        list.append(5);
        list.insert(1, 99);
        expect(list.printList()).toEqual([10, 99, 5]);
    });

    it('should remove values by index', () => {
        list.append(5);
        list.append(16);
        list.remove(1);
        expect(list.printList()).toEqual([10, 16]);
    });

    it('should reverse the list', () => {
        list.append(5);
        list.append(16);
        const reversedList = list.reverse();
        expect(reversedList).toEqual([16, 5, 10]);
    });
});