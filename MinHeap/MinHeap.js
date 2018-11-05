// A min heap is a binary tree data structure that satisfies the following property: The value of every parent node is less than or equal to the values of their direct children nodes. It follows then that the node at the root of the tree is the element in the heap with the minimal value.

//               10
//             /    \
//          14       19
//         /  \     /  \
//       26    31  42   27
//      /  \   /  
//    44  35  33

//    Implement a min heap data structure with at least the following methods:

//    insert(item) adds the given item to the heap. Upon insertion, the heap property needs to be maintained.
//    delete() removes and returns the root element (the min value) of the heap. Upon deletion, the heap property needs to be maintained.
//    getMin() returns the minimal value of the heap in constant time. This method does not remove the minimal value from the heap.
//    Examples:
   
//    const heap = new Heap();
//    console.log(heap.getMin());    // should print 'undefined'
   
//    heap.insert(5);
//    console.log(heap.getMin());   // should print 5
   
//    heap.insert(100);
//    console.log(heap.getMin());   // should print 5
   
//    heap.insert(2);
//    console.log(heap.getMin());   // should print 2
   
//    console.log(heap.delete());   // should print 2
//    console.log(heap.delete());   // should print 5
//    console.log(heap.delete());   // should print 100
   
//    console.log(heap.getMin());   // should print 'undefined'

//WHITEBOARD YOUR APPROACH: 
/*
  An implementation that uses a storage array as the backing
  for the min heap. In order to emulate a binary tree structure,
  we have the following rules:
  1. We can calculate a parent node's left child with the
     formula `index * 2 + 1`.
  2. We can calculate a parent node's right child with the
     formula `index * 2 + 2`.
  3. Given the index of a child node, the formula to 
     calculate the child's parent's index is
     `Math.floor((index - 1) / 2)`.
  Using these forumulas, we can swap the values of parent nodes 
  that are greater then their children node's values and vice versa.
*/
class Heap {
    constructor() {
      this.storage = [];
    }

    insert(value) {
        // push the given value to the end of the storage array
        const index = this.storage.push(value) - 1;
        // use the `_bubbleUp` method to move this new value to
        // a valid spot in the min heap
        this._bubbleUp(index);
      }

      delete() {
        if (!this.storage.length) return;
        if (this.storage.length === 1) {
          return this.storage.pop();
        }