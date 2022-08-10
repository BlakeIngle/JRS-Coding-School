let myArr = [];

for (let i = 0; i < 10; i++) {
    myArr.push(Math.ceil(Math.random() * 10));
}

// Output the sum of all values
// in the array 'myArr'

// EX: 'Sum = 50'

// think about the starting conditions
// think about the end conditions
// think about the inside code
// think about what happens before the
//      loop starts (setup)

let sum = 0;
for (let n of myArr) {
    sum += n;
}

console.log(sum);
