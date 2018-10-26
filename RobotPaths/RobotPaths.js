// Let's say a robot is located at the top-left corner of an n x n grid. The robot can move either up, down, left, or right, one space at a time. It also cannot visit the same spot twice. The robot is trying to reach the bottom-right corner of the grid.

// Write a function to count the number of ways that the robot can reach the bottom-right corner of the grid. Your function should receive n (the size of the grid) as a parameter.

// A board can be generated using this function:

// function makeBoard(n) {
//   let board = [];
//   for (let i = 0; i < n; i++) {
//     board.push([]);
//     for (let j = 0; j < n; j++) {
//       board[i].push(false);
//     }
//   }
//   board.toggle = (i, j) => {
//     board[i][j] = !board[i][j];
//   };
//   board.hasBeenVisited = (i, j) => {
//     return board[i][j];
//   };
//   return board;
// }

//WHITEBOARD YOUR ANSWER HERE: 
function makeBoard(n) {
    let board = [];
    for (let i = 0; i < n; i++) {
      board.push([]);
      for (let j = 0; j < n; j++) {
        board[i].push(false);
      }
    }
    board.toggle = (i, j) => {
      board[i][j] = !board[i][j];
    };
    board.hasBeenVisited = (i, j) => {
      return board[i][j];
    };
    return board;
  }

  function robotPaths(n) {
    let pathCounter = 0;
    const board = makeBoard(n);
  
    const traversePaths = (i, j) => {
      if (i === n - 1 && j === n - 1) {
        pathCounter++;
        return;
      }
      if (i < 0 || i >= n || j < 0 || j >= n) {
        return;
      }
      if (board.hasBeenVisited(i,j)) {
        return;
      }
      else {
        board.toggle(i, j);
        traversePaths(i, j + 1);
        traversePaths(i + 1, j);
        traversePaths(i, j - 1);
        traversePaths(i - 1, j);
        board.toggle(i, j);
      }
    };
    
    traversePaths(0, 0);
    return pathCounter;
  }