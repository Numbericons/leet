class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 * Definition for singly-linked list.
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (!list1 && !list2) return null;
  if (!list1) return list2;
  if (!list2) return list1;

  let head, current;
  let left = list1;
  let right = list2;

  if (list1.val <= list2.val) {
    head = new ListNode(list1.val)
    left = left.next; //left = 2
  } else { 
    head = new ListNode(list2.val);
    right = right.next;
  }

  current = head;

  while (left || right) {
    if (!right || left && left.val <= right.val) { //false
      current.next = new ListNode(left.val); //1 -> 1
      current = current.next;
      left = left.next;
    } else if (!left || right && right.val <= left.val) {
      current.next = new ListNode(right.val); //1 -> 1
      current = current.next;
      right = right.next;
    }
  }

  return head;
};

let current = new LinkedList(4);
current = new LinkedList(2, current);
const list1 = new LinkedList(1, current);

current = new LinkedList(4);
current = new LinkedList(3, current);
const list2 = new LinkedList(1, current);

let result = mergeTwoLists(list1, list2);
console.log(result);

// While loop until one of the lists is empty
//  Each iteration, we compared list1 v. list2 values
//    If list1.val >= list2.val