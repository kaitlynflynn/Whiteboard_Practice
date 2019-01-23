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

   //------------------------------------------------------

// Given an array of integers, return the first two integers that add up to 10. 
// Ex Given Nums = [2, 3, 7, 15]

var twoSum = function(nums, target) {
  
    for (let index = 1; index < nums.length; index++) {
      if (nums[index-1] + nums[index] === 10) return `values: ${nums[index-1]} ${nums[index]}`
  
    }
    return 'N/A'
  };
  
  console.log(twoSum([2, 3, 7, 15], 10)); // 3 7
  console.log(twoSum([2, 9, 1, 7], 10)); // 9 1
  console.log(twoSum([2, 11, -1, 7], 10)); // 11 -1
  console.log('------------');