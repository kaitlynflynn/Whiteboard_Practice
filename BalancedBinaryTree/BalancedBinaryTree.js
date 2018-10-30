// Balanced Binary Tree
// Given a binary tree class that looks like this:

// class BinaryTreeNode {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insertLeft(value) {
//     this.left = new BinaryTreeNode(value);
//     return this.left;
//   }

//   insertRight(value) {
//     this.right = new BinaryTreeNode(value);
//     return this.right;
//   }
// }
// write a function that checks to see if a given binary tree is perfectly balanced, meaning all leaf nodes are located at the same depth. Your function should return true if the tree is perfectly balanced and false otherwise.

//WHITEBOARD YOUR APPROACH HERE: 
/* 
  A recursive solution
  How would you solve this iteratively?
 */
const checkBalanced = (rootNode) => {
    // An empty tree is balanced by default
    if (!rootNode) return true;
    // recursive helper function to check the min depth of the tree
    const minDepth = (node) => {
      if (!node) return 0;
      return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    };
    // recursive helper function to check the max depth of the tree
    const maxDepth = (node) => {
      if (!node) return 0;
      return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }
    
    return (maxDepth(rootNode) - minDepth(rootNode) === 0);
  };

  /* Some console.log tests */
class BinaryTreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertLeft(value) {
      this.left = new BinaryTreeNode(value);
      return this.left;
    }
  
    insertRight(value) {
      this.right = new BinaryTreeNode(value);
      return this.right;
    }
  }
  
  const root = new BinaryTreeNode(5);
  console.log(checkBalanced(root));   // should print true
  
  root.insertLeft(10);
  console.log(checkBalanced(root));   // should print false
  
  root.insertRight(11);
  console.log(checkBalanced(root));   // should print true;