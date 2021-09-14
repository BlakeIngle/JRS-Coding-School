
// perimiter of rectangle with w and h
function perimiter(w, h) {
    return 2 * (w + h);
}

// convert F to C deg
function fToC(f) {
    return (f - 32) * (5 / 9)
}
function cToF(c) {
    return (c * 9 / 5 + 32);
}

// calculate total of a bill + 25% tip
function calcTip(bill) {
    return (bill * 1.25)
}

// convert seconds to years
function secToYears(sec) {
    return (sec / (60 * 60 * 24 * 365));
}

// sum of each digit in a number
function simOfDigits(n) {
    // turn the number into a string
    n = n.toString();

    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        // get each digit (as a character)
        let c = n.charAt(i);
        // turn the string back to a number
        c = Number(c)
        // add the digits to the sum
        sum += c;
    }

    // return the sum
    return sum;
}







// random 1-12 and return name of month
function randomMonth() {
    let monthNumber = randomBetween(1, 12);

    switch (monthNumber) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
    }
}

// is even
function isEven(n) {
    return n % 2 == 0
}
function isOdd(n) {
    return !isEven(n);
}

// return true if % 3
function isDivisibleBy3(n) {
    if (n % 3 == 0) {
        return true;
    } else {
        return false;
    }
}

// is n1 divisible by n2
function isDivisibleByN(n1, n2) {
    return n1 % n2 == 0
}

// take array and return sum of array
function sumOfArray(list) {
    let sum = 0;
    for (let value of list) {
        sum = sum + value;
    }
    return sum;
}

// take array return smallest
function smallestInArray(list) {
    let smallest = list[0];
    for (let value of list) {
        if (value < smallest) {
            smallest = value;
        }
    }
    return smallest;
}



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