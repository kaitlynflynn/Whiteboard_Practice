// We can implement a naive recursive algorithm to display the nth Fibonacci number with the following code:

// function naiveNthFib(n) {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return nthFib(n-1) + nthFib(n-2);
// }
// This solution works fine for small inputs, but even for n = 50, this function takes a significant amount of time to run.

// Implement a more efficient implementation that can handle n values at least up to 1000.

// console.log(betterNthFib(1000));  // should print 4.346655768693743e+208 in less than 1 second

// WHITEBOARD YOUR APPROACH HERE: 
/* 
  Solution that utilizes memoization to 
  cache prior results
  Exhibits a worst-case runtime of O(2^n)
  due to the unbounded recursion
*/
function nthFib(n) {
    let memo = Array(n);
  
    function nthFibMemo(n) {
      let v = memo[n];
  
      if (!v) {
        v = recurse(n);
        memo[n] = v;
      }
      return v;
    }

    function recurse(n) {
        if (n === 0 || n === 1) return n;
        return nthFibMemo(n-1) + nthFibMemo(n-2);
      }
    
      return nthFibMemo(n);
    }

    /*
  Linear time and linear space algorithm that 
  builds a memo from the ground up 
*/
function nthFibIterative(n) {
    let memo = Array(n);
    memo[0] = 0;
    memo[1] = 1;
  
    for (let i = 2; i <= n; i++) {
      memo[i] = memo[i-1] + memo[i-2];
    }
  
    return memo[n];
  }
  