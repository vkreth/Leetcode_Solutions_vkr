/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null)
    {
        slow=slow.next;
        fast=fast.next.next;
    }
    let prev=null;
    let current=slow;
    while(current!=null)
    {
        let temp=current.next;
        current.next=prev;
        prev=current;
        current=temp;
    }
    let firstlist=head;
    let lastlist=prev;
    while(lastlist!=null)
    {
        if(firstlist.val!=lastlist.val)
        {
            return false;
        }
        firstlist=firstlist.next;
        lastlist=lastlist.next;
    }
    return true;
};
