// A child is running up a staircase that has n steps. The child can hop either 1, 2, or 3 steps at a time. Write a function climbStairs that counts the number of possible ways in which the child can climb the staircase.

// For example, for a staircase with n = 3 (the stair has 3 steps), there are 4 ways to climb the staircase:

// 3 hops of 1
// A jump of 1 followed by a jump of 2
// A jump of 2 followed by a jump of 1
// A single jump of 3
// So climbStairs(3) should return 4.

//WHITEBOARD YOUR APPROACH: 
/* 
  Naive Recursive Solution
  Simple and intuitive, but has a runtime
  of O(3^n) due to the three recursive calls
  Successive calls also repeat a lot of work
*/
function naiveClimbStairs(n) {
    // base case 1
    if (n < 0) return 0;
    // base case 2
    else if (n == 0) return 1;
    // move towards our base case
    else {
      return naiveClimbStairs(n-1) + naiveClimbStairs(n-2) + naiveClimbStairs(n-3);
    }
  }