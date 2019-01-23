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

  //------------------------------------------------------

// Implement a Linked List Class
// Questions to ask: singly vs doubly

class Node {
    constructor(data, next, prev) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  
  }
  
  class LinkedList {
      constructor() {
        this.head = null;
      }
  
      add(data) {
        const newNode = new Node(data);
  
        let  current;
        if (this.head === null) {
          this.head = newNode;
        } else {
          current = this.head;
          while(current.next != null) {
            current = current.next;
          }
  
          current.next = newNode;
        }
      }
  
      getHead() { return this.head};
  }
  
  let list = new LinkedList();
  list.add(50) // 50
  list.add(60) // 60
  list.add(70) // 70
  let current = list.getHead();
  
  while(current != null) {
    console.log(current.data);
    current = current.next;
  }
  
  console.log('------------');

  //------------------------------------------------------

// Implement a Stack List Class
// LIFO = last in, first out
// push = adds item on top 
// pop = removes item from top

class Stack {

    constructor() {
      this.arr= []
    }
    
      push(num) {
        this.arr.unshift(num); //unshift = adds item to the front
      }
    
      pop(){
        this.arr.shift() //shift = removes item from the front
      }
    
      getData() {
        return this.arr;
      }
    
      size() {
        return this.arr.length;
      }
    
      peek() {
        if (this.arr.length === 0) return "empty";
        return this.arr[0];
      }
    
      getMax() {
        let max = Number.MIN_SAFE_INTEGER;
          for (let index = 0; index < this.arr.length; index++) {
          if (this.arr[index] > max) max = this.arr[index]
        }
        return max;
      }
     }
    
    let stack = new Stack();
    
    stack.push(10);
    stack.push(20);
    console.log(stack.peek()); // 20
    stack.push(100);
    console.log(stack.peek()); // 100
    console.log(stack.size()); // 3
    console.log(stack.getData()); // [ 100, 20, 10 ]
    console.log(stack.getMax()); // 100
    stack.pop();
    console.log(stack.getMax()) // 20
    console.log(stack.getData()); // [ 20, 10 ]
    
    console.log('------------');