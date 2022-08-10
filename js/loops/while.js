

while (false) {
    console.log("Hello world!")
}









while (false) {
    // do something
}

// while (condtion) {
//      // do somehthing if the condition is true
//      // then do it again
// }




var myNum = 1;

while (myNum < 500) {
    myNum = myNum * 2;
}

console.log(myNum);



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

n = 1;

while (((n + 1) * (n + 1)) < 500) {
    n++;
}

console.log(n);