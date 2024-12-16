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

// Time complexity O(n + m), n: list1, m: list2
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (list1 == null) return list2
    if (list2 == null) return list1


    let node: ListNode | null = {
        val: 0,
        next: null
    }
    // Gán giá trị đầu tiên
    if (list1.val > list2.val) {
        node = new ListNode(list2.val)
        list2 = list2.next
    } else {
        node = new ListNode(list1.val)
        list1 = list1.next
    }
    let pointer = node

    // So sánh với các giá trị tiếp theo. Liên quan đến bộ nhớ của LinkedList nữa!
    while (list1 || list2) {
        if ((list1 != null && list2 != null && (list1.val < list2.val)) || list2 == null) {
            const newNode = new ListNode(list1?.val)
            pointer.next = newNode
            pointer = newNode
            list1 = list1?.next ?? null
        } else {
            const newNode = new ListNode(list2?.val)
            pointer.next = newNode
            pointer = newNode
            list2 = list2?.next ?? null
        }
    }
    return node

};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
console.log("mergeTwoLists(list1, list2)", mergeTwoLists(list1, list2));