let myArr = [];

for (let i = 0; i < 10; i++) {
    myArr.push(Math.ceil(Math.random() * 10));
}

// Write a computer program that 
// finds the index of the value 7
// in the array

// look at one value
// if it is 7, i found it!
// else look at the next one
// if i look through all the boxes
//      and i still don't find 7
//      :( - no 7s are in the array
let indexOf7 = -1;
for (let i = 0; i < myArr.length; i++) {
    let value = myArr[i];
    if (value == 7) {
        indexOf7 = i;
        break; // out of the loop
    }
}

console.log("7 was found at index: " + indexOf7)


console.log(myArr.indexOf(7))