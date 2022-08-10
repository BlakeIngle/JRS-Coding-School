let myArr = [];

for (let i = 0; i < 10; i++) {
    myArr.push(Math.ceil(Math.random() * 10));
}

console.log(myArr)

// Write a program that will count
// how many even numbers are in the array

let n = 8;


var count = 0;
for (let value of myArr) {
    if (value == 7) {
        // keep a tally
        count++;
    }
}

console.log(count)