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