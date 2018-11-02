// You went and bought a copy of Webster's English dictionary on April Fool's Day and received the joke edition of the dictionary. You open it up and see that the first entry in the dictionary starts somewhere in the middle. Once the end of the alphabet is reached, it circles around and starts over at the 'A' section and goes all the way through until it reaches the beginning. Otherwise, though, everything else seems to be in order.

// For example, a rotated list of words might look something like this:

// const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',    // <-- rotation happens here
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ]
// Write a function findRotationPoint that receives an array of words and calculates the index of the point where the rotation occurs. With the above list of words, your function would return 5.

// Analyze the time and space complexity of your solution. Can we write a solution that performs better than linear time?

// WHITEBOARD YOUR APPROACH HERE: 
/* 
  We'll use a binary search strategy for this one. We check
  the halfway point in the middle of our array to see if 
  the middle element is greater than or less than the first
  element in our array. From there we can determine whether
  we need to check the left half of our array, or the right
  half. 
  This way we're successively cutting the problem in half
  with each iteration. Hence we achieve a runtime of O(log n).
*/

function findRotationPoint(words) {
    const firstWord = words[0];
  
    let floorIndex = 0;
    let ceilingIndex = words.length - 1;
  
    while (floorIndex < ceilingIndex) {
      // guess a point halfway between floor and ceiling
      let guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

      // if guess comes after first word or is the first word
      if (words[guessIndex] >= firstWord) {
        // go right
        floorIndex = guessIndex;
      } else {
        // go left
        ceilingIndex = guessIndex;
      }

      // if floor and ceiling have converged
      if (floorIndex + 1 === ceilingIndex) {
        // between floor and ceiling is where we flipped to the beginning
        // so ceiling is alphabetically first
        break;
      }
    }
  
    return ceilingIndex;
  }