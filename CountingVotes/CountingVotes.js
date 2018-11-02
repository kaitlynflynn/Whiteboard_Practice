// You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

// Example:

// const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

// countVotes(votes);  // should return 'michael'

//WHITEBOARD YOUR APPROACH HERE: 
/*
  O(n) time complexity and O(n) space complexity
*/

function countVotes(arr) {
    const counts = {};
    let maxVotes = 0;
    let winner = '';
    // Iterate over entire array
    arr.forEach(vote => {
      // If name doesnt exist in counts yet, add it with a value of 0
      if (!counts[vote]) counts[vote] = 0;
  
      // Increment the count of the name
      counts[vote]++;