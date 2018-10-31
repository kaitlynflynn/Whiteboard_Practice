// Balanced Brackets
// Write a function balancedBrackets that receives a string of opening and closing brackets and determines whether or not the string's openers and closers are properly nested.

// The possible opening brackets are [, {, and (. The corresponding closers are ], }, and ).

// Examples:

// balancedBrackets('[]{}()');   // should return true
// balancedBrackets('[{[()]}]');   // should return true
// balancedBrackets('[({}}]');   // should return false

//WHITEBOARD YOUR APPROACH HERE: 
/*  
  For this problem, it's important to think about which 
  data structures to use in order to achieve the functionality
  we're looking for. Think about _why_ these particular data
  structures were used in the solution code. Could we have used
  alternative ones? What would be the resulting tradeoffs?
*/

function balancedBrackets(str) {
    let line = str.split('');
    // we use a stack to keep track of the opening brackets
    const stack = [];
    // we use an object to store the possible openers with
    // their corresponding closers
    const openers = {
      '(': ')', 
      '{': '}', 
      '[': ']'
    };