// Write a function called rockPaperScissors that will take as input an integer n. Your function should output all of the possible combinations of the three plays 'rock', 'paper', or 'scissors' up to the given integer n.

// For example, for n = 2, your function should output:

// [[rock, rock], [rock, paper], [rock, scissors],
//  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
//  [scissors, paper], [scissors, scissors]]
// So your output should be an array of arrays, where the length of each inner array is n.

//Solution here: 
function rockPaperScissors(n) {
    // outcomes array is the outer array that will hold all of the smaller arrays
    const outcomes = [];
    const plays = ['rock', 'paper', 'scissors'];
    // inner recursive helper function
    function findOutcome (roundsLeft, result) {
        // base case
        if (roundsLeft === 0) {
            outcomes.push(result);
            return;
        }
        // move toward the base case by adding the next play
        // and recursively calling this function by decrementing
        // the 'roundsLeft' argument 
        plays.forEach((play) => {
            findOutcome(roundsLeft - 1, result.concat(play));
        });
    }
    // Be sure to make the initial call
    findOutcome(n, []);
    return outcomes;
}

// Here are some console.log tests
const rv1 = rockPaperScissors(2);
console.log(rv1); // should print [[rock, rock], [rock, paper], [rock, scissors], [paper, rock], [paper, paper], [paper, scissors], [scissors, rock], [scissors, paper], [scissors, scissors]

const rv2 = rockPaperScissors(3);
console.log(rv2.length);    // should print 27

const rv3 = rockPaperScissors(4);
console.log(rv3.length);    // should print 81

const rv4 = rockPaperScissors(5);
console.log(rv4.length);    // should print 243