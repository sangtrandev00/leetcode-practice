/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// Sử dụng kỹ thuật brute force O(1) and 
// Using two pointers technique
export function middleNode(head: ListNode | null): ListNode | null {
    let fast = head; // O(1)
    let slow = head; // O(1)
    while (fast?.next) {
        slow = slow?.next ?? null;
        fast = fast?.next?.next ?? null
    }
    return slow;
}; // Space: O(1), time (O(n/2))

// Space complexity O(1) Tại vì fast và slow chỉ lưu bộ nhớ!
// console.log("middleNode", middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))));
console.log("middleNode", middleNode(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))))));