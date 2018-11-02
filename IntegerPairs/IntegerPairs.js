// Write a function integerPairs to find and print out all pairs of integers within an input array which sum up to a specified input value k.

// There are multiple ways to do this, depending upon whether you want to favor runtime or space.

// Example:

// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// // should print '6 5', '7 4', '8 3', '9 2', '10 1'

//WHITEBOARD YOUR APPROACH HERE: 
/* 
  A runtime-efficient implemention that
  trades time efficiency for space efficiency
  O(n) runtime with O(n) space
*/
function integerPairs(arr, k) {
    // Use a hash to store key-value pairs of numbers
    const hash = {};
    // Loop through the arr
    arr.forEach((x, i) => {
      // check to see if the complement for the
      // current element exists in the hash
      if (hash[k - x]) {
        console.log(x, k - x);
      } else {
        // if it doesn't, then we hash this number
        // +1 so get around 0-indexing
        hash[x] = i + 1;
      }
    });
}