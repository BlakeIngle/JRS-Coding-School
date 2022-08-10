let myArr2D = [];

for (let i = 0; i < 10; i++) {
    myArr2D.push([]);
    for (let j = 0; j < 10; j++) {
        myArr2D[i].push(Math.ceil(Math.random() * 10));
    }
}

console.log(myArr2D)

// find the sum
let sum = 0;
for (let i = 0; i < myArr2D.length; i++) {
    for (let j = 0; j < myArr2D[i].length; j++) {
        let value = myArr2D[i][j];
        sum += value;
    }
}

// for (let nestedArr of myArr2D) {
//     for (let value of nestedArr) {
//         sum += value
//     }
// }

console.log("the sum is: ", sum);
console.log("the average is: ", sum / 100);

// count all 7s
let count = 0;
for (let i = 0; i < myArr2D.length; i++) {
    for (let j = 0; j < myArr2D[i].length; j++) {
        let value = myArr2D[i][j];
        if (value == 7) {
            count++;
        }
    }
}

console.log("there were ", count, ' 7s in the array')

// find the first 7 (index)
let posOf7 = [];
for (let i = 0; i < myArr2D.length; i++) {
    for (let j = 0; j < myArr2D[i].length; j++) {
        let value = myArr2D[i][j];
        if (value == 7) {
            // we found it
            posOf7 = [i, j]
            break;
        }
    }
    if (posOf7.length != 0) {
        break;
    }
}

console.log('first 7 was found at ', posOf7)
