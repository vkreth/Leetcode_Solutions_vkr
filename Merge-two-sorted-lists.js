/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1==null)
    {
        return list2;
    }else if(list2==null)
    {
        return list1;
    }
    let start=null;
    if(list1.val<list2.val)
    {
        start=list1;
        list1=list1.next;
    }else
    {
        start=list2;
        list2=list2.next;
    }
    let curr=start;
    while(list1&&list2)
    {
        if(list1.val<list2.val){
            start.next=list1;
            list1=list1.next;
        }else{
            start.next=list2;
            list2=list2.next;
        }
        start=start.next;
    }
    if(!list1)
    {
        start.next=list2;
    }
    if(!list2)
    {
        start.next=list1;
    }
    return curr;
};
