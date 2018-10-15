// PROBLEM: Write a function that will take a string as an input, returning whether or not the string is a Palindrome.

// PRO TIP - GOOD QUESTIONS TO ASK YOUR INTERVIEWER BEFORE YOU START WRITING IT OUT: 
//          1. What type of return do you want to come out of this function? 
//          2. If it's a Palindrome, do you want me to return a boolean that would 
//             return True or False based on whether the word is a Palindrome?

// EXTRA CONTEXT on Native Data Types in JavaScript:
// Interviewers will ask you this type of question to assess your knowledge of Native Data Types. 
// A string is one of the native data types in JavaScript.
// The native data type on string does not have a method to do a reverse of the string, but an array 
// which is a type of an object in JS does have a built in method called reverse that you can use.
// To show you have knowledge of all the primitive data types within JS and how you can move between 
// them to be able to accomplish what you want in this function.
// Now you need to figure out how you can get your string and convert it into an array.
// The string method natively has a method on it that's called split - a split will convert a string 
// into an array so this will be your first step in writing your function below.

// *** NOW TIME TO WHITEBOARD ***

// I'm going to start off by creating a function and call it 'Palindrome'. 
// It is going to take in 1 parameter which is a string. 
function Palindrome(str) {
    // Now I'm going to create a new variable called string2. 
    // Then I'm going to set it equal to string.split.
    // NOTE: Split method requires you to put in a parameter into the method that tells it on what it 
    //       is going to be splitting in the actual string itself. Here we are using 'quote quote' which 
    //       basically means after every single letter in the string, it's going to split it out into an 
    //       individual element into the array.
    var str2 = str.split('');
    // Now I can reverse it by taking string2.reverse.
    str2.reverse();
    // NOTE: Now we need to figure out what we need to do to convert it from an array back into a string.
    //       There is a method that's called 'join' that will convert it back into a string.
    // Here we use the split method with the same 'quote quote' which basically says I'm just going to convert it 
    // all into a single string with nothing to separate them out. 
    // So now string2 is now an exact reverse of string. 
    str2 = str2.split('');