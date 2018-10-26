// Write a function that receives an array of integers and returns an array of the products.

// For example, given

// [1, 7, 3, 4]
// your function should return

// [84, 12, 28, 21]
// by calculating

// [7*3*4, 1*3*4, 1*7*4, 1*7*3]
// If your interviewee comes up with a solution that utilizes division, that's fine. Once they get through that, challenge them to then come up with a solution that doesn't utilize division!

//WHITEBOARD YOUR ANSWER HERE: 

// How would you solve this problem if division were allowed? 
function getProductOfAllIntsExceptAtIndex(intArray) {
    if (intArray.length < 2) {
        throw new Error('Getting the product of numbers at other indicies requires at least 2 numbers');
    }

    
}