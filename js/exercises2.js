
function randomNum() {
    return Math.ceil(Math.random() * 10);
}

var arr = []

arr.push(randomNum());

for (let i = 0; i < 3; i++) {
    arr.push(randomNum());
}

var sum = 0;
for (let i = 0; i < arr.length; i++) {
    let v = arr[i];
    sum += v;
}

console.log(sum);


// n -> a number
// 18) return sum of each digit
function sumDigitsOfN(n) {
    n += '' // number -> string
    var sum = 0;
    for (let i = 0; i < n.length; i++) {
        let value = Number(n.charAt(i))
        sum += value
    }
    return sum;
}

console.log(sumDigitsOfN(998))
console.log(sumDigitsOfN(13579))

// random int 1-12 return name of month

function randomMonth() {
    let n = Math.floor(Math.random() * 12)

    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    console.log(months[n])
}

randomMonth();


// 20) isEven()
function isEven(n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
// 21) isOdd() !!! but must use isEven
function isOdd(n) {
    return !isEven(n)
}

// 22) isDivisiblyBy3()
function isDivisibleBy3(n) {
    return n % 3 === 0
}

// 23) is a divisible by b
function isADivisbleByB(a, b) {
    return a % b === 0
}

// 25) arr of nums -> return smallest

// pickup the first book
//  compare that book with the next book
// whichever book is the smallest (least # of pages) is the smallest (so far)
//      continue comparing the smallest (so far) with each 'next' book

function minInArr(arr) {
    var smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    // done
    return smallest;
}

var arr = [3, 7, 1, 9, 4, 6, 5];
console.log(minInArr(arr))