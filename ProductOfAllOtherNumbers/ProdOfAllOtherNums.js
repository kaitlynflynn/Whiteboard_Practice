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

    const productsOfAllIntsExceptAtIndex = [];

    // For each integer, we find the product of all the integers before it, storing the total product so far each time
    let productSoFar = 1;
    for (let i = 0; i < intArray.length; i++) {
        productsOfAllIntsExceptAtIndex[i] = productSoFar;
        productSoFar *= intArray[i];
    }

    // For each integer, we find the product of all the integers after it. 
    // Since each index in products already has the product of all the integers before it,
    // now we're storing the total product of all other integers.
    productSoFar = 1;
    for (let j = intArray.length - 1; j >= 0; j--) {
        productsOfAllIntsExceptAtIndex[j] *= productSoFar;
        productSoFar *= intArray[j];
    }

    return productsOfAllIntsExceptAtIndex;
};

// Console.log tests: 
console.log(getProductOfAllIntsExceptAtIndex(
    [1, 2, 3, 4, 5]
)); // should print [120, 60, 40, 30, 24]

console.log(getProductOfAllIntsExceptAtIndex(
    [9, 90]
)); // should print [90, 9]