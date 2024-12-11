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

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let firstItemList1 = list1
    let firstItemList2 = list2

    let node: ListNode | null = {
        val: 0,
        next: null
    }

    let temp: any = null
    let holder: any = node
    while ((firstItemList1 as any).next && (firstItemList2 as any).next) {
        if (firstItemList1 != undefined && firstItemList1.val < (firstItemList2 as any).val) {
            holder.val = firstItemList1.val
            firstItemList1 = firstItemList1.next
            if (temp) {
                holder.next = temp
            }
            temp = holder
        } else {
            holder.val = firstItemList2?.val ?? 0
            firstItemList2 = firstItemList2?.next ?? null
            if (temp) {
                holder.next = temp
            }
            temp = holder
        }
        holder.next = {
            val: 0,
            next: null
        }
    }
    return node

};

const list1 = new ListNode(1, new ListNode(2, new ListNode(4, null)))
const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
mergeTwoLists(list1, list2)