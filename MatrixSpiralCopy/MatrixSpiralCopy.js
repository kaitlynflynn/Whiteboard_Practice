// Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a clockwise spiral order. Your function then should return that array.

// Analyze the time and space complexities of your solution.

// Examples:

// input:  inputMatrix  = [[1, 2, 3, 4, 5],
//                         [6, 7, 8, 9, 10],
//                         [11, 12, 13, 14, 15],
//                         [16, 17, 18, 19, 20]
//                        ]

// output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

//WHITEBOARD YOUR APPROACH HERE: 
function spiralCopy(inputMatrix) {
    const numRows = inputMatrix.length;
    const numCols = inputMatrix[0].length;
    // keep track of where we are along each
    // of the four sides of the matrix
    let topRow = 0;
    let bottomRow = numRows - 1;
    let leftCol = 0;
    let rightCol = numCols - 1;