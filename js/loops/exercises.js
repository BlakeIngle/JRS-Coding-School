
for (let i = 0; i <= 10; i++) {
    console.log(i)
}
console.log("-----------")
for (let i = 13; i <= 42; i++) {
    console.log(i)
}

console.log("-----------")

for (let i = 30; i >= 10; i--) {
    console.log(i)
}

console.log("-----------")

for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        // is even
        console.log(i)
    }
}

console.log("-----------")

for (let i = 0; i <= 30; i++) {
    if (i % 3 == 0) {
        // is divisible by 3
        console.log(i)
    }
}

console.log("-----------")

var myArr = [7, 4, 3, 5, 7, 8, 4]
var result = 0;

for (let i = 0; i < myArr.length; i++) {
    // if 7 -> + 1
    if (myArr[i] == 7) {
        result++;
    }
}

console.log("number of 7s:", result)


console.log("-----------")

var sum = 0;

for (let v of myArr) {
    sum += v;
}

console.log("sum:", sum)

console.log("-----------")

var b = 0;
var a = 1;
var sum = 0;

console.log("Fibonachi sequence")

for (let i = 0; i < 100; i++) {

    if (i < 2) {
        console.log(i)
        continue;
    }

    sum = a + b;
    b = a;
    a = sum;
    console.log(sum);
}


myArr = [];

for (let i = 0; i < 100; i++) {
    if (i < 2) {
        myArr.push(i);
        continue;
    }

    myArr.push(myArr[i - 1] + myArr[i - 2]);
}

console.log("fib array:", myArr)


var myString = "The quick brown fox jumped over the lazy dog"

//
myArr = myString.split(" ");

for (let i = 0; i < myArr.length; i++) {
    let word = myArr[i];

    var firstLetter = word.charAt(0).toUpperCase();
    var restOfWord = word.slice(1);

    myArr[i] = firstLetter + restOfWord;
}

myString = myArr.join(' ');

console.log(myString)




function randomArray(n) {
    let myArr = [];
    for (let i = 0; i < n; i++) {
        myArr.push(Math.ceil(Math.random() * 100))
    }
}

var arr1 = randomArray(50) // 50 elements