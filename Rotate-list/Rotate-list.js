/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(head===null||head.next===null)return head;
    let s=head;
    let f=head;
    let length=0;
    let c=head;
    while(c)
    {
        c=c.next;
        length++;
    }
    k=k%length;
    if(k===0)return head;
    for(let i=0;i<k;i++)
    {
        f=f.next;
    }
    while(f.next)
    {
        s=s.next;
        f=f.next;
    }
    let newhead=s.next;
    f.next=head;
    s.next=null;
    return newhead;
};
