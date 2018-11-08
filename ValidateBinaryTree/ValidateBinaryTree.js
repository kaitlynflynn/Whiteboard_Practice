// Given a binary tree like the following:

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
// Write a function that accepts a binary tree node and returns true if the tree rooted at that node forms a valid binary search tree.

// Example:

// const root = new BinaryTreeNode(10);
// root.insertLeft(5);
// root.insertRight(15);

// isBinarySearchTree(root);   // should return true
// Keep in mind that it isn't enough to check that nodes in the left subtree are always descending as we traverse down. Conversely, it isn't enough to simply check that all the nodes in the right subtee are ascending.

// We might have a tree that looks like this:

//                     50
//                   /    \
//                 30      80
//                /  \    /  \
//               20  60  70  90
// The value of 60 in the left subtree is correct if we were only considering the tree rooted at 30, however, considering the entire tree, 60 should not be in the left subtee at all, since 60 is greater than the root.

//WHITEBOARD YOUR APPROACH HERE: 

function isBinarySearchTree(root) {
    // start at the root, with an arbitrarily low lower bound
    // and an arbitrarily high upper bound
    const nodeAndBoundsStack = [];
    nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});

    // depth-first traversal
    while (nodeAndBoundsStack.length) {
      const nodeAndBounds = nodeAndBoundsStack.pop();
      const node = nodeAndBounds.node;
      const lowerBound = nodeAndBounds.lowerBound;
      const upperBound = nodeAndBounds.upperBound;

      // if this node is invalid, we return false right away
      if (node.value <= lowerBound || node.value >= upperBound) {
        return false;
      }

      if (node.left) {
        // this node must be less than the current node
        nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

      }
      if (node.right) {
        // this node must be greater than the current node
        nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
      }
    }

  return true;
}

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

/* Some console.log tests */
const root = new BinaryTreeNode(50);
root.insertLeft(30);
root.left.insertLeft(20);
root.left.insertRight(60);
root.insertRight(80);
root.right.insertLeft(70);
root.right.insertRight(90);

console.log(isBinarySearchTree(root.left));   // should print true
console.log(isBinarySearchTree(root.right));  // should print true
console.log(isBinarySearchTree(root));        // should print false