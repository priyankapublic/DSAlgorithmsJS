function Node() {
  this.data = null;
  this.next = null;
}

function newNode(data) {
  var temp = new Node();
  temp.data = data;
  temp.next = null;
  return temp;
}

function removeLoop(head) {
  // If list is empty or has only one node
  // without loop
  if (head == null || head.next == null) return;

  let slow = head,
    fast = head;

  // Move slow and fast 1 and 2 steps
  // ahead respectively.
  slow = slow.next;
  fast = fast.next.next;

  // Search for loop using slow and
  // fast pointers
  while (fast && fast.next) {
    if (slow === fast) break;
    slow = slow.next;
    fast = fast.next.next;
  }

  /* If loop exists */
  if (slow === fast) {
    slow = head;
    // this check is needed when slow
    // and fast both meet at the head of the LL
    // eg: 1.2.3.4.5 and then
    // 5.next = 1 i.e the head of the LL
    if (slow.data === fast) {
      while (fast.next !== slow) fast = fast.next;
    } else {
      while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
      }
    }

    /* since fast.next is the looping point */
    fast.next = null; /* remove loop */
  }
}
function getMiddle(node) {
  let curr = node;
  let a = [];
  while (curr !== null) {
    a.push(curr);
    curr = curr.next;
  }

  let mid = 0;
  if (a.length % 2 === 0) {
    mid = a.length / 2;
  } else {
    mid = Math.ceil(a.length / 2) - 1;
  }

  return a[mid].data;
}

function getMiddle2(head) {
  let slow_ptr = head;
  let fast_ptr = head;
  if (head !== null) {
    while (fast_ptr != null && fast_ptr.next != null) {
      fast_ptr = fast_ptr.next.next;
      slow_ptr = slow_ptr.next;
    }
    console.log("The middle element is [%d]\n\n", slow_ptr.data);
  }
}

function isPalindrome(head) {
  var stack = [];
  var curr = head;
  while (curr) {
    stack.push(curr.data);
    curr = curr.next;
  }

  while (head) {
    if (head.data !== stack.pop()) {
      return 0;
    }
    head = head.next;
  }
  return 1;
}

function rotate(head, k) {
  var tail = null;
  var curr = head;
  while (curr.next) {
    curr = curr.next;
  }
  tail = curr;
   

  for (let i = 0; i; i++) {}
}
let head = newNode(50);
head.next = head;
head.next = newNode(20);
head.next.next = newNode(50);
head.next.next.next = newNode(20);
head.next.next.next.next = newNode(0);

/* Create a loop for testing */
head.next.next.next.next.next = head.next.next;

// printList(head);
removeLoop(head);

console.log("Linked List after removing loop \n");
console.log(head);
console.log("Middle", getMiddle(head));
getMiddle2(head);
console.log("isPalindrome:", isPalindrome(head));
rotate(head);
