// write a function that finds if a number is divis. by 3


function isDivisibleBy3(n: number): boolean {
    if (n % 3 == 0) {
        return true;
    }
    return false;

    // return n % 3 == 0
}

function idDivisibleBy(a: number, b: number): boolean {

    if (a % b == 0) {
        return true;
    }
    return false;
}

function smallestInArray(a: number[]): number {

    let smallest = a[0];

    for (let i = 0; i < a.length; i++) {
        a[i] // value at index i
        if (a[i] < smallest) {
            // this is a new smaller value
            smallest = a[i];
        }
    }

    return smallest;
}

function smallestSquare(): number {
    let x = 0;
    while (x * x < 12000) {
        x++;
    }
    return x - 1;
}

console.log(smallestSquare())


function sumInArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}


var array1;
var array2 = [];
var array3 = [1, 2, 3];

array3[0]; // value of array at index 0 -> 1
array3[2]; // value of array at index 2 -> 3

array3.length; // size of array - how many items are in it -> 3

array3[array3.length - 1]; // last value in the array


let hw: String = "Hello World!";
hw.length
hw.charAt(-1)


// Write a function that takes a string as an argument 
// and returns the reverse of that string.

function reverseString(string: String): String {
    let reversed = "";

    if (string == null || string == "") {
        console.warn("Cannot reverse an empty string");
        return;
    }

    for(let i = 0; i < string.length; i++) {
        reversed += string.charAt(i);
    }

    
    return "";
}