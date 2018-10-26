// Implement a function depthFirstForEach, once as a recursive function, and then again in an iterative fashion. Your functions should receive a callback and invoke that callback on each node as it is traversing in depth-first fashion. Your functions should also receive a tree node so that it can begin traversing.

// Example tree class:
// class BinaryTreeNode {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     insertLeft(value) {
//       this.left = new BinaryTreeNode(value);
//       return this.left;
//     }
  
//     insertRight(value) {
//       this.right = new BinaryTreeNode(value);
//       return this.right;
//     }
//   }

// For example, given a tree like the following

//                       6
//                     /   \
//                   10     18
//                  /         \
//                 9           89

// and the following callback function:
// const cb = (x) => console.log(x);

// your `depthFirstForEach` function should start at the root node and print out, in this order, 6, 10, 9, 18, 89.

// WHITEBOARD YOUR CODE HERE:

// Recursive implementation: 
function recursiveDepthFirstForEach(node, cb) {
    cb(node.value);

    if (node.left) {
        recursiveDepthFirstForEach(node.left, cb);
    }

    if (node.right) {
        recursiveDepthFirstForEach(node.right, cb);
    }
}

// Iterative implementation: 
function iterativeDepthFirstForEach(node, cb) {
    // use a stack to achieve the desired order
    const stack = []; 
    stack.push(node);

    while (stack.length > 0) {
        const current = stack.pop();
        // in order to achieve a left to right depth-first ordering, the right node needs to be pushed to the stack first
        if (current.right) {
            stack.push(current.right);
        }

        if (current.left) {
            stack.push(current.left);
        }

        cb(current.value);
    }
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

// Some console.log tests
const root = new BinaryTreeNode(6);
root.insertLeft(10);
root.insertRight(18);
root.left.insertLeft(9);
root.right.insertRight(89);

const cb = (x) => console.log(x);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 18 89
console.log();

root.left.insertRight(15);
root.right.insertLeft(0);

recursiveDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();
iterativeDepthFirstForEach(root, cb); // should print 6 10 9 15 18 0 89
console.log();