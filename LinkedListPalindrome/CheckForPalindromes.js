// Return `true` if the given string is a palindrome. 
// Otherwise return `false`

// A palindrome is a word or sentence that's spelled the same way both forward and backward,
// ignoring punctuation, case, and spacing. 

// NOTE: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes. 

// We'll pass string with varying formats, such as "racecar", "RaceCar", and "race CAR" among others. We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2" and "2_A3*3#A2"

function palindrome(str) {
    str = str.toLowerCase(); // will convert string to lowercase
    var symbols = /[\W_]/g; // create symbols variable to hold all symbols
    // \W removes all non-alphanumeric characters: 
    //     \W matches any non-word character
    //     \W is equilvalent to [^A-Za-z0-9_]
    //     \W matches anything that is not enclosed in the brackets
    //     g flag stands for global search

    str = str.replace(symbols, ""); // take the string and replace symbols with no spaces
    var newString = str.split("").reverse().join(""); // newString variable takes original string and splits it into an array, reverses it and then join it back together into a string with no symbols & all lowercase

    if (newString === str) { // compares these and if they're the same, returns true
     return true;   
    }
    else {
        return false; // otherwise returns false
    }
}

palindrome("tacocat");
console.log(palindrome("tacocat")); // should return true

//other test cases 
// ("race car") should return true
// ("A man, a plan, a canal. Panama") should return true
// ("not a palindrome") should return false
// ("never odd or even") should return true
// ("nope") should return false