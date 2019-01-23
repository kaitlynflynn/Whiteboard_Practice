// Reverse the words in a string in-place (Javascript) "hello harry" -> "olleh yrrah"

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello clem");
console.log(reverseString('hello clem'));

// another solution:
function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString2('hello harry'));
console.log('------------');

//------------------------------------------------------

// Write a function to determine if a word is a palindrome.  

function Palindrome(str) {
    str =  str.toLowerCase(); //sets to lowercase
     var str2 = str.split('').reverse().join('');
   
       return str === str2;
   }
   console.log(Palindrome('Clementine')); // return false
   console.log(Palindrome('Racecar')); // returns true
   
   // another solution:
   function Palindrome2(str) {
   
     str = str.toUpperCase(); //sets to uppercase
     for (let first = 0, last = str.length -1; first < last; ++first, --last) {
        if (str[first] !== str[last]) return false;
     }
     return true;
   }
   console.log(Palindrome2('tacocat')); // returns true
   console.log(Palindrome2('Pop')); // returns true
   console.log(Palindrome2('pug')); // returns false
   console.log('------------');