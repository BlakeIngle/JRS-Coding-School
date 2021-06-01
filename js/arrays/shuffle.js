// write a function that reorders the elements in an array.
// for each element myList[i], randomly generate an
// index j and swap myList[i] with myList[j] like this:

function randomBetween(a, b) {

    let random = Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)

    return random;
}

function makeArray() {
    var arr = [];
    for (let i = 0; i < 10; i++) {
        arr.push(randomBetween(1, 10))
    }
    return arr;
}
var myList = makeArray();

// for (let i = myList.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (myList.length))

//     temp = myList[i];
//     myList[i] = myList[j];
//     myList[j] = temp;
// }

console.log(myList);

temp = myList[0]
for (let i = 1; i < myList.length; i++) {
    myList[i - 1] = myList[i]
}
myList[myList.length - 1] = temp;

console.log(myList)


temp = myList[myList.length - 1]
for (let i = myList.length - 2; i >= 0; i--) {
    myList[i + 1] = myList[i]
}
myList[0] = temp;



console.log(myList)





for (let i = 0; i < myList.length; i++) { // put a new value in each index
    //sort 1 value

    //find the lowest value
    let lowIndex = i;
    for (let j = i; j < myList.length; j++) {
        if (myList[j] < myList[lowIndex]) {
            lowIndex = j
        }
    }

    //put it in the next spot
    let temp = myList[i] // 1
    myList[i] = myList[lowIndex] // 2
    myList[lowIndex] = temp;

}

console.log(myList)



myList = [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]

// write a function/code that swaps the value 3 and 8
// write a function/code that swaps the value at index 0 and index 1
// write a funciton/code swaps the value at the first index and the value at the last index

// write a function/code that pushes all values to the left by one index (don't lose the first value)
// expected outputs of myList
// [1, 8, 5, 7, 9, 2, 4, 6, 3, 0]
// [1, 3, 5, 7, 9, 2, 4, 6, 8, 0]
// [3, 1, 5, 7, 9, 2, 4, 6, 8, 0]
// [0, 1, 5, 7, 9, 2, 4, 6, 8, 3]
// [1, 5, 7, 9, 2, 4, 6, 8, 3, 0]