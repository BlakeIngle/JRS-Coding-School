// if(some condition) {
//     // code that will execute 
//     // if the condition is true
// }

let a = 4;

if (a == 4) {
    console.log("a is 4")
}

// string together multiple conditions
// to check
// else if(another condition) {
//      // code that will execute if
//      // every condition before was 
//      // false and this condition is true
// }
if (a === 1) {
    console.log("a is 1")
} else if (a == 2) {
    console.log("a is 2")
} else if (a == 3) {
    console.log("a is 3")
} else {
    console.log("a is not 1, 2, or 3")
}

// what if that condition is false?
// else {
//      // code that will execute when
//      // the condition is false
// }
if (a == 9) {
    console.log("a is 9")
} else {
    console.log("a is not 9")
}


a = 4;
var b = 5;

var name = "Blake"
var isRaining = false;

// write a bit of code that will 
// print a message
// that says wether a is less than, 
// equal to, or greater than b

if (a < b) {
    console.log('a is less than b');
}
if (a == b) {
    console.log('a and b are equal')
}
if (a > b) {
    console.log('a is greater than b')
}

// a is NOT greater than b
// a is less than or equal to b
