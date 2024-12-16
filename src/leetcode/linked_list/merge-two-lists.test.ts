// ... existing code ...
import { describe, it, expect } from "bun:test";
import { mergeTwoLists, ListNode } from "./merge-two-lists";

// Unit tests for mergeTwoLists function
describe('mergeTwoLists', () => {
    it('should return null when both lists are empty', () => {
        expect(mergeTwoLists(null, null)).toBeNull();
    });

    it('should return the non-empty list when one list is empty', () => {
        const list1 = new ListNode(1, new ListNode(2));
        expect(mergeTwoLists(list1, null)).toEqual(list1);
        expect(mergeTwoLists(null, list1)).toEqual(list1);
    });

    it('should merge two sorted lists', () => {
        const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
    });

    it('should handle lists with duplicate values', () => {
        const list1 = new ListNode(1, new ListNode(1));
        const list2 = new ListNode(1, new ListNode(1));
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList).toEqual(new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1)))));
    });

    it('should handle lists with different lengths', () => {
        const list1 = new ListNode(1, new ListNode(3));
        const list2 = new ListNode(2);
        const mergedList = mergeTwoLists(list1, list2);

        expect(mergedList).toEqual(new ListNode(1, new ListNode(2, new ListNode(3))));
    });
});

// ... existing code ...