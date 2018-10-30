// Binary Search Tree from Sorted Array
// Given an array that is sorted in ascending order containing unique integer elements, write a function that receives the sorted array as input and creates a valid binary search tree with minimal height.

// For example, given an array [1, 2, 3, 4, 5, 6, 7], your function should return a binary search tree with the form 4 / 
// 2 6 / \ / 
// 1 3 5 7

// Note that when we say "binary search tree" in this case, we're just talking about a tree that exhibits the expected form of a binary search tree. The tree in this case won't have an insert method that does the work of receiving a value and then inserting it in a valid spot in the binary search tree. Your function should place the values in valid spots that adhere to the rules of binary search trees, while also seeking to minimize the overall height of the tree.

// Here's a BinaryTreeNode class that you can use to construct a binary search tree:

// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

//WHITEBOARD YOUR APPROACH HERE: 
function createMinimalBST(sortedArray) {
    return createMinimalBSTHelper(sortedArray, 0, sortedArray.length - 1);
  }
  
  function createMinimalBSTHelper(sortedArray, left, right) {
    if (right < left) return null;
  
    const mid = Math.floor((left + right) / 2);
    const node = new BinaryTreeNode(sortedArray[mid]);
  
    node.left = createMinimalBSTHelper(sortedArray, left, mid - 1);
    node.right = createMinimalBSTHelper(sortedArray, mid + 1, right);
  
    return node;
  }
  
  
  class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }