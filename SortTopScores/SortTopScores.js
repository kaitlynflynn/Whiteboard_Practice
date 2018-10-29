// You wrote a popular game with a highest possible score of 1000. Currently, you're using a sorting method with a runtime of O(n log n). However, your sorting algorithm is slowing down the overall performance of your game, and players are complaining.

// Given that your game has a highest possible score, can we take advantage of this fact to write a sorting algorithm that achieves better than O(n log n)?

// Your sorting algorithm should return an array of all the sorted scores with the highest scores at the beginning of the array, with the rest of the elements in descending order. Make your general-purpose such that it can accept a highestPossibleScore as a parameter, in case we need to raise the highest possible score of our game.

// WHITEBOARD YOUR APPROACH HERE: 
// NOTE: Since we have a highest possible score, we can use a strategy known as a counting sort into to achieve a runtime faster than O(n log n).

function sortTopScores(scores, highestPossibleScore) {
    // initialize an array with a length of highestScore then fill it with 0's
    const scoreCounts = Array(highestPossibleScore).fill(0); 

    // Increment the value at the index of `score` thus we get the count of how many times each score appears in our `scores` array
    scores.forEach(score => {
        scoreCounts[score]++;
    });

    const sortedScores = [];

    
}