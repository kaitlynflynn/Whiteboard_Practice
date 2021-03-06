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

  /* Helper function to validate that the created tree is a valid BST */
function isBinarySearchTree(root) {
    const nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});
    while (nodeAndBoundsStack.length) {
      const nodeAndBounds = nodeAndBoundsStack.pop();
      const node = nodeAndBounds.node;
      const lowerBound = nodeAndBounds.lowerBound;
      const upperBound = nodeAndBounds.upperBound;
      if (node.value <= lowerBound || node.value >= upperBound) {
          return false;
      }
      if (node.left) {
        nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
      }
      if (node.right) {
        nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
      }
    }
    return true;
  }

  /* Helper function to check the max height of a BST */
function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
  }
  
  /* Some console.log tests */
let sortedArray = [1, 2, 3, 4, 5, 6, 7];
let bst = createMinimalBST(sortedArray);

console.log(isBinarySearchTree(bst));   // should print true
console.log(maxDepth(bst));             // should print 3

sortedArray = [4, 10, 11, 18, 42, 43, 47, 49, 55, 67, 79, 89, 90, 95, 98, 100];
bst = createMinimalBST(sortedArray);

console.log(isBinarySearchTree(bst));   // should print true
console.log(maxDepth(bst));             // should print 5