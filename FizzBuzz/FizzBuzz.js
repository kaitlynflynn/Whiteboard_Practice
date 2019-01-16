// Write a program that prints the numbers from 1 to 100. But for multiples of 
// three print “Fizz” instead of the number and for the multiples of five print 
// “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// SOLUTION HERE

// if statements setup utilizing remainder operator (%)
// this returns the remainder of one number divided by another
// example: if i = 15, console will print "FizzBuzz"
for (var i=1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");

    // else if i = multiple of 3, console prints "Fizz"
    else if (i % 3 == 0) console.log("Fizz");

    // else if i = multiple of 5, console prints "Buzz"
    else if (i % 5 == 0) console.log("Buzz");

    // else console prints regular number
    else console.log(i);
}

//WITHOUT NOTES
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}