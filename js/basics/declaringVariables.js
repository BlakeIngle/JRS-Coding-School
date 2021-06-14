// js is very loose
a = 4;
// that is a valid variable decleration
// you can assign values and declare on the same line

let b;
var c;
// let and var are more explicit
c; // reference later
// let c; cannot use let/var again after first decleration

// let declares a variable within the function scope
// var declares a variable that can be used outside the function scope
// example:
let d = 4;
if (d == 4) {
    d = 5;
    var e = 6;
    let f = 7;
}
// console.log(d, e, f); // f is not defined because 'let'
console.log(d, e);

// you can also declare multiple variables
// on the same 'line'

var h,
    i,
    j,
    k;

// practical example;
let x = 0,
    y = 0;