// Given two Stack instances (i.e. Stacks exhibit LIFO ordering and only have access to the methods push and pop), implement a Queue data structure with the methods enqueue, dequeue, and peek (returns the same result as calling dequeue but doesn't change the queue). Your Queue should of course exhibit FIFO ordering.

// WHITEBOARD YOUR APPROACH HERE: 
class Queue {
    constructor() {
      // Stack to hold elements that get added
      this.inStack = [];
      // Stack to hold elements that are getting removed
      this.outStack = [];
    }
  
    enqueue(item) {
      this.inStack.push(item);
    }

    dequeue() {
        // if the outStack is empty
        // we need to populate it with inStack elements
        if (this.outStack.length === 0) {
          // empty out the inStack into the outStack
          while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
          }
        }
        return this.outStack.pop();
      }

      peek() {
        // same logic as `dequeue`
        if (this.outStack.length === 0) {
          while (this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
          }
        }
        return this.outStack[0];
      }
    }