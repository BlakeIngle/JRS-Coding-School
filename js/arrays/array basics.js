// an array is an ordered collection of data

// every array has a property called 'length'
// the length is how many pieces of data are in the array

// every value in the array has a position / an index



// number[]
var myArr = [5, 8, 2, 4, 1, 9, 10, 7, 3, 6];

console.log(myArr)
console.log(myArr.length)

console.log(myArr[0]) // first value in an array
var i = 0;
console.log(myArr[i]);

console.log(myArr[myArr.length - 1]) // last value in an array

// first index - 0
// last index - (myArr.length - 1)

var secondArr = ['😀', '🥴', '🙄']

// bad things 😢
secondArr[7] // index out of bounds
secondArr[-1] // index out of bounds
secondArr['abc'] // index out of bounds

secondArr[7] = 'whoops'
secondArr[-1] = 'whoops'
secondArr['abc'] = 'whoops' // DO NOT DO THIS!!!
console.log(secondArr);

var a = 3;
a = 4; // assign a new value to a var

myArr = ['a', 'b', 'c']
// myArr[0] = 8; // assign a new value to index 0
// i = 0;
// myArr[i] = a // assignments with variables

///////////////
myArr.push('d', 'e', 'f', 'g', 'h'); // push a new value onto the end of the array
console.log(myArr)

myArr.pop(); // pop the last value off of the array
console.log(myArr)





// var arr1 = [1, 2, 3]
// var arr2 = [1, 2, 3]
// var arr3 = arr2;

// console.log(arr1 == arr2)
// console.log(arr2 == arr3)

