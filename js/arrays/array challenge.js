// write a function that creates an array
// and pushes 100 values into the array
// (push 0, 1, 2, ...) with i
//   arr.push[i]

// print to the console every value in the array that starts and ends with a 4
// ex: 4, 14, 24, 34, 40, 41, 42, 43, 44, 45, ... 94


myArr = [];

for (let i = 0; i < 100; i++) {
    myArr.push(i);
}

for (let i = 0; i < myArr.length; i++) {
    myArr[i]; // some value

    // 4 14 24 34 54 64 74 84 94

    //if the number is greater than or equal to 40 and is less than 50

    if ((myArr[i] < 50 && myArr[i] >= 40) || myArr[i] % 10 == 4) {
        console.log(myArr[i])
    }
}


myArr[i] < 50 // true
myArr[i] >= 40 // false
myArr[i] % 10 == 4 // true