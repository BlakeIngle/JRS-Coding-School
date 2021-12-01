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

module.exports = {
    reverseString = reverseString,
    makeArray = makeArray
}