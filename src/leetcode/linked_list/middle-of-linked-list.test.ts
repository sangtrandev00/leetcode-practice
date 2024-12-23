import { describe, expect, test } from 'bun:test';
import { ListNode, middleNode } from './middle-of-linked-list';

describe('middleNode', () => {
    test('should return null for an empty list', () => {
        expect(middleNode(null)).toBeNull();
    });

    test('should return the only node for a single-node list', () => {
        const head = new ListNode(1);
        expect(middleNode(head)).toBe(head);
    });

    test('should return the middle node for an odd-length list', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3)));
        expect(middleNode(head)).toBe(head.next); // Middle node is 2
    });

    test('should return the second middle node for an even-length list', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
        expect(middleNode(head)).toBe(head?.next?.next ?? null); // Middle node is 3
    });

    test('should return the middle node for a longer odd-length list', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        expect(middleNode(head)).toBe(head?.next?.next ?? null); // Middle node is 3
    });

    test('should return the second middle node for a longer even-length list', () => {
        const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
        expect(middleNode(head)).toBe(head?.next?.next?.next ?? null); // Middle node is 4
    });
});