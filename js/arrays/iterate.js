let myArr = [];

console.log("start")

for (let i = 0; i < myArr.length; i++) {
    const value = myArr[i];
    console.log(value);
}

console.log('end')

// (array) for loop shorthand
for (let value of myArr) {
    console.log(value);
}

// another option
myArr.forEach((value, i) => {
    console.log(value)
});