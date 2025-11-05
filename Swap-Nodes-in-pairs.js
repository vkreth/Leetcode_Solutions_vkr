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
var swapPairs = function(head) {
    if(head===null||head.next==null)return head;
    let d=new ListNode();
    d.next=head;
    let p=d;
    let c=head;
    let n=head.next;
    while(n&&c)
    {
        p.next=n;
        c.next=n.next;
        n.next=c;
        p=c;
        c=p.next;
        n=c&&c.next;
    }
    return d.next;
};
