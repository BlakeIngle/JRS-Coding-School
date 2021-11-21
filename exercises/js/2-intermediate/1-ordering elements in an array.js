/**
 * Implement your code for the following functions. 
 * Do not change any code outside of the designated lines.
 * 
 * After implementing your code, execute your file using the node command.
 * 
 * The expected output of this program is this:
 * 
 *      brown
 *      dog
 *      fox
 *      jumped
 *      lazy
 *      over
 *      quick
 *      the
 *      the
 * 
 */

function strToArray(str) {
    // Write a function that accepts a string as a parameter and converts
    // each word into unique values of an array. 
    // each word should be in all lowercase letters and should 
    // not contain any punctuaction (.)
    // the function should return the array of strings.
    
    /************************************/
    // CODE GOES HERE //

    // hint: use the following string functions:
    // string.split()
    // string.toLowerCase()
    // string.replace()
    /************************************/
}

function orderAlphabetically(arr) {
    /************************************/
    // Write a function that will accept an array of strings
    // and order each string alphabetically
    // the function will return the array of sorted values.

    // hint: use js' Array.sort() or write your own sorting method.
    /************************************/
}

var str = "The quick brown fox jumped over the lazy dog."

console.log(orderAlphabetically(strToArray(str)));