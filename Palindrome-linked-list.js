-----Note: I have tried this solution using "conversion of LL to array", which is not a good process. hope it helps
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
    if(head==null)return true;
    if(head.next==null)return true;
    let a=[];
    let current=head;
    while(current!=null)
    {
        a.push(current.val);
        current=current.next;
    }
    let n=a.length;
    for(let i=0;i<n/2;i++)
    {
        if(a[i]!==a[n-i-1])
        {
            return false;
        }
    }
    return true;
};
