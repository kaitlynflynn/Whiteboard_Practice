// Reverse the words in a string in-place (Javascript) "hello harry" -> "olleh yrrah"

function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello clem");
console.log(reverseString('hello clem'));

// another solution:
function reverseString2(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString2('hello harry'));
console.log('------------');