while (false) {
    // do something
}

// while (condtion) {
//      // do somehthing if the condition is true
//      // then do it again
// }




var sum = 1;

while (sum < 500) {
    sum = sum * 2;
}

console.log(sum);


//23) Write a function that returns the largest integer n where n*n is 
// still less than a given argument. (500)
// Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller 
// than 5, but 3*3 is 9, which is larger than 5. 


var x = 500;
var n = 0;

while (n * n < 500) {
    n++;
}

n = n - 1; // the correct answer




do {
    n++;
} while (n * n < 500)