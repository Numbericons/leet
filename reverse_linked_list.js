class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
};

var reverseList = function(head, last=null) {
  if (!head) return null;
  let next = head.next;
  head.next = last;
  if (!next) return head;
  return reverseList(next, head)
};

let last =  new LinkedList(5);
last = new LinkedList(4, last);
last = new LinkedList(3, last);
last = new LinkedList(2, last);
const head = new LinkedList(1, last);

const results = reverseList(head);
console.log(results);