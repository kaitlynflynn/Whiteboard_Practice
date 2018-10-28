// Imagine a literal stack of plates. If the stack gets too high, it might topple. So in real life, we would start a new stack of plates when the previous stack exceeds some threshold.

// Implement a data structure SetOfStacks that implements this behavior. The SetOfStacks data structure should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically as if it were a single stack. Additionally, add a method that returns the number of stacks in the set.

// Follow up: Implement a function popAt that receives an integer index and pops from the stack located at that index in the set of stacks.

// Example:

// // declare a new `SetOfStacks` where each stack has a capacity of 3
// const stacks = new SetOfStacks(3);

// stacks.push(10);
// stacks.push(9);
// stacks.push(8);
// stacks.push(7);

// console.log(stacks.length);   // should print 2

// console.log(stacks.popAt(0)); // should print 8
// console.log(stacks.pop());    // should print 7
// console.log(stacks.pop());    // should print 9

// console.log(stacks.length);   // should print 1

//WHITEBOARD YOUR SOLUTION HERE: 

class SetOfStacks {
    constructor(capacity) {
        this.capacity = capacity;
        this.stacks = [[]];
        this.currentStackIndex = 0;
    }

    get length() {
        return this.currentStackIndex + 1;
    }

    push(item) {
        // check to see if the current stack has room
        if (this.stacks[this.currentStackIndex].length < this.capacity) {
            this.stacks[this.currentStackIndex].push(item);
        } else {
            // current stack has reached the capacity
            // add a new stack to the set of stacks and push onto the new stack
            this.stacks.push([]);
            this.currentStackIndex++;
            this.stacks[this.currentStackIndex].push(item);
        }
    }

    pop() {
        // check to see if the current stack is empty
        if (this.stacks[this.currentStackIndex].length === 0) {
            this.currentStackIndex--;
        }
        return this.stacks[this.currentStackIndex].pop();
    }

    // There are a couple of ways this `popAt` function could be implemented
    // We could simply pop from the stack at the given index and call it a day
    // However, this might lead to tricky situations later on if someone
    // assumes that all stacks other than the last one operate at full capacity.

    // The alternative is to pop from the stack at the given index, and then 
    // roll over an item from the next stack, which would get us into a chain
    // reaction of having to roll over an item from every stack to the previous
    // stack until we reach the last stack. 

    // There are signicant time complexity tradeoffs between these two approaches
    // Be sure to discuss these tradeoffs with your interviewee.

    // Simple `popAt` implementation with no roll over
    popAt(index) {
        return this.stacks[index].pop();
    }

    // A `popAt` implementation that exhibits the roll over behavior 
    popAtWithRollOver(index) {
        return _shiftStacks(index);
    }

    _shiftStack(index) {
        const rv = this.stacks[index].shift();

        if (this.stacks[index].length === 0) {
            this.stacks.splice(index, 1);
        } else if (this.stacks.length > index + 1) {
            const v = this._shiftStacks(index + 1);
            this.stacks[index].push(v);
        }

        return rv;
    }
}

// Some console log tests
const stacks = new SetOfStacks(3);
stacks.push(6);
stacks.push(8);
stacks.push(3);
console.log(stacks.length); // should print 1

stacks.push(4);
console.log(stacks.length); // should print 2

console.log(stacks.popAt(0)); // should print 3

console.log(stacks.pop());    // should print 4
console.log(stacks.pop());    // should print 8
console.log(stacks.length);   // should print 1