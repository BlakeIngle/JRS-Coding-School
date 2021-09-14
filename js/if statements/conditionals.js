// AND - only true if both are true
// and && - double and
// console.log(true && false) // false
// console.log(false && true) // false
// console.log(false && false) // false
// console.log(true && true) // true

// // OR - true if either are true
// // or || - double or
// console.log(true || false) // true
// console.log(false || true) // true
// console.log(false || false) // false
// console.log(true || true) // true

// // 0 - false - in binary
// // 1 - true - in binary
// console.log(true || true)
// // single &
// false & true

// // single |
// true | false

// // single & and single | will check both conditions
// // no matter what. Even if one in the & is
// // already false or one in the | is 
// // already true;

// a = 4;
// b = 5;

// if (a < 3 && a++ == 7) {
//     //do something
// }

// a < b // true
// a >= b // false
// a % b == 1 // true





// a = 4;
// b = 5;

// console.log(a < b) // true
// console.log(a > b) // false
// console.log(a <= b); // true
// console.log(a >= b); // false
// console.log(a == b); // false
// console.log(a != b); // true

// console.log(true);
// console.log(!true);



// if (false) {
//     console.log("a is " + a)
//     a = a * 2;
// }

// if (a <= b){ // ==  <  >  <=  >=
//     console.log("a is less than or equal to b");
// } else {
//     console.log("a is greater than b")
// }

// if(a >= b)
//     console.log("a is greater than or equal to b");

// if(a == b) { 
//     console.log("a is equal to b"); 
// }
    
// console.log("this is also true");

// // if (a < b) {
// //     console.log("a is less than b");
// // } else if (a == b) {
// //     console.log("a is equal to b")
// // } else {
// //     console.log("a is greater than b");
// // }

// var day = "Tuesday"
// var isRaining = false;

// if(day == "Tuesday" && !isRaining) {
//     // go for a walk
//     console.log("going for a walk")
// }


// console.log(true == 1)
// console.log(true === 1)




true; // literal boolean
"Hello world!"; // literal string
4; // literal number

var a = true;
var b = "Hello world!";
var c = 4;

// console.log(a instanceof Number);
// console.log(a instanceof String);


a = true;

console.log(isNaN(4));
console.log(isNaN("hello world"));
console.log(isNaN(['hi']));
console.log(isNaN({}));
console.log(isNaN(false));

null;

var f;

console.log(f)
console.log(f == null)

f = null;
console.log(f)