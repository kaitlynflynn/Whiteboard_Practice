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

    // Now what we need to do is compare these and return them.
    // To do that we can check to see if string is equal to string2 by creating an if statement.
    if (str === str2) {
        // if it's the same, return True
        return true;
        // else, return False
    } else {
        return false;
    }
}

// This successfully shows off how to check if a string is a Palindrome, but there is a few things we can do to make it even better! 
// So let's refactor!

// ALTERNATIVE SOLUTION: 
function Palindrome(str) {
    var str2 = str.split('');
    str2.reverse();
    str2 = str2.split('');

    // Remove your if statement from above and refactor so it returns whether or not string is equal to string2.
    // This one line is now equivalent to what we had in our if statement before.
    return str === str2;
}

// There is one more thing we can do and that is taking these three lines and convert them into a single line
var str2 = str.split('');
str2.reverse();
str2 = str2.split('');

// The above now becomes this: 
var str2 = str.split('').reverse().join(''); 
// Instead we now have string2 in 1 line where I've converted to an array
// I've used the built in reverse function that's built into an array to reverse it, then we can join it back together
// I've converted it back to a string so now string2 is an exact reverse
// Now I can compare it between the two of them

// FINAL CODE REFACTORED SHOULD LOOK LIKE THIS: 
// Explain your thought process out loud as your refactoring so the interview can follow along. 
// Explain how having it on one line is easier to follow/understand. 
function Palindrome(str) {
    var str2 = str.split('').reverse().join('');

    return str === str2;
}

// ASK YOUR INTERVIEWER SOME FOLLOW UP QUESTIONS REGARDING SOME ISSUES THIS FUNCTION MAY HAVE: 
// 1. Do I need to worry about upper and lower case?
//      Example: Pop with a capital P is the first letter, but technically not a Palindrome if you worry about 
//               upper/lower case as upper/lower cases are not equivalent. In that case the above function would fail. 

// Let's go over how we can fix our code to take this into consideration: 
// We can convert it to lowercase (or upper) by adding the following directly under the first line of your function. 


// NEW CODE TO LOOK LIKE THIS: 
function Palindrome(str) {
    str.toLowerCase();
    var str2 = str.split('').reverse().join('');

    return str === str2;
}

// OTHER QUESTIONS TO ASK YOUR INTERVIEWER:
// 1. What do I do if what I'm passed in is an empty string?
//    Do I need to return true or false for an empty string?
//    If the answer is yes you would need to add in a line in the 
//    very beginning that would check to test if your string is a string or not 
 
// 2. What do I need to do if this string isn't a string?
// Example: if 1 2 3 is passed in, that is not a string

// 3. Do we need to account for punctuation such as spaces, comma's, periods, exclamation marks etc? 
//    If the answer is yes, we can add a line to the beginning by using a Regex expression that takes all punctuation marks
//    and removes them from the string