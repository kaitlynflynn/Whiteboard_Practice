// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// Analyze the time and space complexities of your solution.

// Example:

// input: arr = [4, 6, 10, 15, 16]
//        limit = 21
// output: [3, 1]   // since these are the indices of 
//                  // weights 6 and 15 whose sum equals 21

//WHITEBOARD YOUR APPROACH: 
function getIndicesOfItemWeights(arr, limit) {
    // use an object to store item weights
    // along with their 'complement'
    const o = {};

    for (let i = 0; i < arr.length; i++) {
        const weight = arr[i];
        // check the object to see we have the 
        // complement of the current weight
        const complementIndex = o[limit - weight];
        // if we do, then we're done!
        if (complementIndex !== undefined) {
          return [i, complementIndex];
        } else {
          // otherwise, store the weight with its index
          o[weight] = i;
        }
      }
      return [];
    }