// write a function that prints the average of 10 random numbers

//start with

var sum = 0;

for(var i = 1; i < 10; i++) {
    sum = sum + Math.random()
}
var average = sum / i;
console.log(average);