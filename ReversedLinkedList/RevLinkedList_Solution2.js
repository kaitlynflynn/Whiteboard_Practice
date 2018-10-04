// Reverse a Singly Linked List.

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    insert(value) {
      const newnode = new Node(value);
  
      if (!this.head) this.head = newnode;
  
      else if (!this.tail) {
        this.head.next = newnode;
        this.tail = newnode;
      }
  
      else {
        this.tail.next = newnode;
        this.tail = newnode;
      }
    }
  
    // remove() { ... }
  
    // search() { ... }
  
    // etc.
  }
  
  
  /*
  
    0. if there is no head or no tail, then there is no work to be done
  
    1. initialize a stack
        - this will temporarily hold all list elements
        - stack = linear data structure that follows LIFO = plain old js array
  
    2. starting at the head of the original list, push each list element to the stack
        - head = stack[0] 
        - tail = stack[length-1]
  
    3. initialize a new linked list (this will act as the reversed list) 
        - the last element of the stack will be the head of this new list
        - the first element of the stack will be the tail of this new list
  
    4. pop all elements from the stack until none remain
        a. pop element from stack
        b. push element to our reversed list
        c. repeat until stack is empty 
  
  */
  
  
  const reverseLinkedList = original_list => {
    // Step 0
    if (!original_list.head || !original_list.tail) return null; 
  
    // Step 1
    const stack = [];
  
    // Step 2
    let current = original_list.head;
    while (current) {
      stack.push(current);
      current = current.next;
    }
  
    // Step 3
    const reversed = new LinkedList();
  
    // Step 4
    let node = stack.pop();
    while (node) {
      node.next = null;
      reversed.insert(node);
      node = stack.pop();
    }
  
    return reversed;
  }