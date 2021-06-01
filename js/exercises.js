// write a function that finds if a number is divis. by 3
function isDivisibleBy3(n) {
    if (n % 3 == 0) {
        return true;
    }
    return false;
    // return n % 3 == 0
}

function idDivisibleBy(a, b) {
    if (a % b == 0) {
        return true;
    }
    return false;
}

function smallestInArray(a) {
    var smallest = a[0];
    for (var i = 0; i < a.length; i++) {
        a[i]; // value at index i
        if (a[i] < smallest) {
            // this is a new smaller value
            smallest = a[i];
        }
    }
    return smallest;
}

function sumInArray(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function reverseString(string) {
    let reversed = "";
    if (string == null || string == "") {
        console.warn("Cannot reverse an empty string");
        return;
    }
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string.charAt(i);
        "Hello " + "World"
    }
    return reversed;
}

function randomBetween(a, b) {

    let random = Math.floor(Math.random() * (Math.max(a, b) + 1 - Math.min(a, b))) + Math.min(a, b)

    return random;
}

// write a function that creates a 2d array
// that is 10 x 10
// and each value in the array is a random int 1-10

function makeArray() {

    var arr = [];

    for (let i = 0; i < 10; i++) {
        arr.push(randomBetween(1, 10))
    }

    return arr;
}

// write a function that creates an array that is 10 random
// numbers 1-10 and returns true if the sum of the values in
// the array is divisible by the lowest value in the array
function bigFunction() {

    // make array
    var arr = makeArray();

    if (isDivisibleBy(sumInArray(arr), smallestInArray(arr))) {
        return true;
    }

    return false;
}

console.log(bigFunction());


export {
    randomBetween,
    makeArray,
    idDivisibleBy,
    smallestInArray,
    sumInArray,
    smallestInArray,
    reverseString
}