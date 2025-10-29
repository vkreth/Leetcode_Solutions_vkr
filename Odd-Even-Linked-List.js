/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(head==null || head.next==null)
    {
        return head;
    }
    let odd=head;
    let even=odd.next;
    let evenstart=even;
    while(odd.next!=null && even.next!=null)
    {
        odd.next=odd.next.next;
        even.next=even.next.next;
        odd=odd.next;
        even=even.next;
    }
    odd.next=evenstart;
    return head;
};
